from app import guard, app;
from flask import request

@app.route("/api/login", methods=["POST"])
def login():
    req = request.get_json(force=True)
    username = req.get("username", None)
    password = req.get("password", None)
    user = guard.authenticate(username, password)
    ret = {
        "accessToken": guard.encode_jwt_token(user),
        "refreshToken": guard.encode_jwt_token(user),
    }
    return ret, 200


@app.route("/api/refresh", methods=["POST"])
def refresh():
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {"refreshToken": new_token}
    return ret, 200