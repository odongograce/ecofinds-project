from app import app
from models import db, User, AuctionItem, Bid, AuctionList
from datetime import date

with app.app_context():
    
    print("Deleting data...")
    Bid.query.delete()
    AuctionList.query.delete()
    AuctionItem.query.delete()
    User.query.delete()

    print("Creating Users...")
