
from flask import request, jsonify
from models import db, AuctionItem

def register_auction_item_routes(app):

    @app.route('/auction_items', methods=['GET'])
    def get_auction_items():
        items = AuctionItem.query.all()
        result = [{"id": i.id, "title": i.title, "description": i.description,
                   "category": i.category, "condition": i.condition,
                   "starting_price": i.starting_price} for i in items]
        return jsonify(result)

    @app.route('/auction_items', methods=['POST'])
    def create_auction_item():
        data = request.get_json()
        new_item = AuctionItem(
            title=data['title'], description=data['description'],
            category=data['category'], condition=data['condition'],
            starting_price=data['starting_price']
        )
        db.session.add(new_item)
        db.session.commit()
        return jsonify({"message": "Auction item created"}), 201
