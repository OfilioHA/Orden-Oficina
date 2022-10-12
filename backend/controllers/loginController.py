from app import guard, app;
from flask import request

@app.route("/api/refresh", methods=["POST"])
def refresh():
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {"refreshToken": new_token}
    return ret, 200