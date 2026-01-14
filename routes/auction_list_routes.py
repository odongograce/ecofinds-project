from flask import request, jsonify
from models import db, AuctionList

def register_auction_list_routes(app):

    @app.route('/auction_list', methods=['GET'])
    def get_auction_list():
        auctions = AuctionList.query.all()
        result = [{"id": a.id, "user_id": a.user_id, "auction_item_id": a.auction_item_id} for a in auctions]
        return jsonify(result)

    @app.route('/auction_list', methods=['POST'])
    def add_to_auction_list():
        data = request.get_json()
        new_entry = AuctionList(user_id=data['user_id'], auction_item_id=data['auction_item_id'])
        db.session.add(new_entry)
        db.session.commit()
        return jsonify({"message": "Added to auction list"}), 201
