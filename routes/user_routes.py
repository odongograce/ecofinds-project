
from flask import request, jsonify
from models import db, User

def register_user_routes(app):

    @app.route('/users', methods=['GET'])
    def get_users():
        users = User.query.all()
        result = [{"id": u.id, "username": u.username, "email": u.email} for u in users]
        return jsonify(result)

    @app.route('/users', methods=['POST'])
    def create_user():
        data = request.get_json()
        new_user = User(username=data['username'], email=data['email'], password=data['password'])
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created"}), 201
