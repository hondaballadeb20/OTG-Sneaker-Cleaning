from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class BookingPhoto(BaseModel):
    filename: str
    data: str  # base64 data URL, downscaled client-side


class BookingCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    whatsapp: str = Field(min_length=6, max_length=30)
    email: str = Field(max_length=160)
    sneaker_brand: str = Field(max_length=80)
    sneaker_model: str = Field(max_length=120)
    service: str = Field(max_length=60)
    condition: str = Field(max_length=60)
    preferred_date: Optional[str] = ""
    notes: Optional[str] = ""
    photos: List[BookingPhoto] = []


class Booking(BookingCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


@api_router.get("/")
async def root():
    return {"message": "OTG Sneaker Cleaning API"}


@api_router.post("/bookings")
async def create_booking(input: BookingCreate):
    if len(input.photos) > 5:
        raise HTTPException(status_code=400, detail="Maximum 5 photos allowed")
    booking = Booking(**input.model_dump())
    doc = booking.model_dump()
    await db.bookings.insert_one(doc)
    return {
        "id": booking.id,
        "message": "Booking received. OTG will be in touch shortly.",
    }


@api_router.get("/bookings")
async def list_bookings():
    bookings = await db.bookings.find(
        {}, {"_id": 0, "photos": 0}
    ).to_list(500)
    return bookings


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
