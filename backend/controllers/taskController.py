from pprint import pprint
from app import app;
from models.Task import Task;
from flask import jsonify, request;

@app.route("/tasks/list")
def taskslist():
    tasks = Task().list();
    pprint(tasks);
    return jsonify(tasks);   

@app.route("/tasks/create", methods=["POST"])
def taskcreate():
    req = request.get_json(force=True);
    return req, 200