from flask import request, jsonify
from models import db, Bid

def register_bid_routes(app):

    @app.route('/bids', methods=['GET'])
    def get_bids():
        bids = Bid.query.all()
        result = [{"id": b.id, "user_id": b.user_id,
                   "auction_item_id": b.auction_item_id,
                   "bid_amount": b.bid_amount} for b in bids]
        return jsonify(result)

    @app.route('/bids', methods=['POST'])
    def create_bid():
        data = request.get_json()
        new_bid = Bid(user_id=data['user_id'],
                      auction_item_id=data['auction_item_id'],
                      bid_amount=data['bid_amount'])
        db.session.add(new_bid)
        db.session.commit()
        return jsonify({"message": "Bid created"}), 201
