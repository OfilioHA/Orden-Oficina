from manage import app, db;
from flask import jsonify, request;
from flask_praetorian import auth_required;

from app.services import TaskRoundService
from entities.models import Task;
from entities.models import TaskAccomplished;


@app.route("/tasks/list")
def taskslist():
    tasks = Task().list();
    return jsonify(tasks);   

@app.route("/tasks/create", methods=["POST"])
@auth_required
def taskcreate():
    try: 
        req = request.get_json(force=True);
        actualround = TaskRoundService.lastround(req["task_id"]).id;
        amountround = TaskRoundService.getamount(actualround, req["person"]);
        if(amountround >= 3): raise Exception("Ronda cumplida");
        newtask = TaskAccomplished(
            req["task_id"],
            actualround,
            req["person"],
            req["date"],
            req["time"]
        );
        db.session.add(newtask);
        db.session.commit();
        return jsonify(newtask.to_dict), 200
    except Exception as error: 
        return jsonify({
            "status": False,
            "message": str(error)
        }), 500