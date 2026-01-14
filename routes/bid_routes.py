from flask import Blueprint, request, jsonify
from models import db, Bid

bid_bp = Blueprint("bids", __name__, url_prefix="/bids")


@bid_bp.route("", methods=["POST"])
def create_bid():
    data = request.get_json()
    bid = Bid(
        user_id=data["user_id"],
        auction_item_id=data["auction_item_id"],
        bid_amount=data["bid_amount"],
        bid_time=data.get("bid_time")
    )
    db.session.add(bid)
    db.session.commit()
    return jsonify({
        "id": bid.id,
        "user_id": bid.user_id,
        "auction_item_id": bid.auction_item_id,
        "bid_amount": bid.bid_amount
    }), 201
