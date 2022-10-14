from pprint import pprint
from app import app;
from models.Task import Task;
from flask import jsonify, request;
from flask_praetorian import current_user_id, auth_required;

@app.route("/tasks/list")
def taskslist():
    tasks = Task().list();
    return jsonify(tasks);   

@app.route("/tasks/create", methods=["POST"])
@auth_required
def taskcreate():
    req = request.get_json(force=True);
    req["user_id"] = current_user_id();
    return jsonify(req), 200