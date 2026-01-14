from app import app
from models import db, Buyer, Seller, AuctionItem, Bid, AuctionList
from datetime import date

with app.app_context():
    
    print("Deleting data...")
    Bid.query.delete()
    AuctionList.query.delete()
    AuctionItem.query.delete()
    Buyer.query.delete()
    Seller.query.delete()

    print("Creating Buyers...")
    george = Buyer(name="George", email="george.m@gmail.com")
    bob = Buyer(name="Bob", email="bob10101@gmail.com")
    carol = Buyer(name="Carol", email="carol.okoth@gmail.com")
    sarah = Buyer(name="Sarah", email="sarah.wavy@gmail.com")
    esther = Buyer(name="Esther", email="esther.bobo@gmail.com")
    mark = Buyer(name="Mark", email="markkamau@gmail.com")
    ethan = Buyer(name="Ethan", email="ethanruto@gmail.com")
    kevin = Buyer(name="Kevin", email="omondikevo@yahoo.com.au")
    buyers = [george, bob, carol, sarah, esther, mark, ethan, kevin]

    print("Creating auction items...")
