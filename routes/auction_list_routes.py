from flask import Blueprint, request, jsonify
from models import db, AuctionList

auction_list_bp = Blueprint("auction_list", __name__, url_prefix="/auction-list")


@auction_list_bp.route("", methods=["POST"])
def add_to_list():
    data = request.get_json()
    item = AuctionList(
        user_id=data["user_id"],
        auction_item_id=data["auction_item_id"],
        added_at=data.get("added_at")
    )
    db.session.add(item)
    db.session.commit()
    return jsonify({"id": item.id}), 201
