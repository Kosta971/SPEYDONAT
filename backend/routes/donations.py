from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from .. import schemas, models

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/donate")
def donate(donation: schemas.DonationCreate, db: Session = Depends(get_db)):
    new_donation = models.Donation(**donation.dict())
    db.add(new_donation)
    db.commit()
    return {"message": "Donation sent!"}

