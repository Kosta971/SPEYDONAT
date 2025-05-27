from sqlalchemy import Column, Integer, String, ForeignKey, Float, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from .database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True)
    hashed_password = Column(String)

    donations = relationship("Donation", back_populates="streamer")

class Donation(Base):
    __tablename__ = "donations"
    id = Column(Integer, primary_key=True, index=True)
    streamer_id = Column(Integer, ForeignKey("users.id"))
    amount = Column(Float)
    message = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    streamer = relationship("User", back_populates="donations")
