from pprint import pprint
from app import app;
from models.Task import Task;
from flask import jsonify;

@app.route("/tasks")
def taskslist():
    tasks = Task().list();
    pprint(tasks);
    return jsonify(tasks);   