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
    george = User(name="George", email="george.m@gmail.com")
    bob = User(name="Bob", email="bob10101@gmail.com")
    carol = User(name="Carol", email="carol.okoth@gmail.com")
    sarah = User(name="Sarah", email="sarah.wavy@gmail.com")
    esther = User(name="Esther", email="esther.bobo@gmail.com")
    mark = User(name="Mark", email="markkamau@gmail.com")
    ethan = User(name="Ethan", email="ethanruto@gmail.com")
    kevin = User(name="Kevin", email="omondikevo@yahoo.com.au")
    users = [george, bob, carol, sarah, esther, mark, ethan, kevin]

    print("Creating auction items...")
