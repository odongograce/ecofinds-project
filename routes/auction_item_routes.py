from flask import Blueprint, request, jsonify
from models import db, AuctionItem

auction_item_bp = Blueprint("auction_items", __name__, url_prefix="/auction-items")


@auction_item_bp.route("", methods=["POST"])
def create_auction_item():
    data = request.get_json()
    item = AuctionItem(
        title=data["title"],
        description=data["description"],
        category=data["category"],
        condition=data["condition"],
        starting_price=data["starting_price"],
        start_date=data["start_date"],
        end_date=data["end_date"],
        status=data.get("status", "open")
    )
    db.session.add(item)
    db.session.commit()
    return jsonify({"id": item.id, "title": item.title}), 201

@auction_item_bp.route("", methods=["GET"])
def get_auction_items():
    items = AuctionItem.query.all()
    return jsonify([{
        "id": i.id,
        "title": i.title,
        "description": i.description,
        "category": i.category,
        "condition": i.condition,
        "starting_price": i.starting_price,
        "start_date": i.start_date,
        "end_date": i.end_date,
        "status": i.status
    } for i in items]), 200
