from manage import app, db;
from flask import jsonify, request;
from flask_praetorian import auth_required;

from app.services import TaskRoundService;
from app.services import TaskAccomplishedService;

from app.exceptions import TaskRoundFullTasks;

from entities.models import Task;

@app.route("/tasks/list")
def taskslist():
    tasks = Task().list();
    return jsonify(tasks);   

@app.route("/tasks/create", methods=["POST"])
@auth_required
def taskcreate():
    try: 
        req = request.get_json(force=True);
        task_id = req["task_id"];
        person_id = req["person"];
        actual_round_id = TaskRoundService.last_round(task_id).id;
        TaskRoundService.validate_tasks_amount(
            actual_round_id, 
            person_id
        );
        new_task = TaskAccomplishedService.create(
            task_id,
            actual_round_id,
            person_id,
            req["date"],
            req["time"]
        )
        return jsonify(new_task.to_dict()), 200
    except TaskRoundFullTasks as error: 
        return jsonify({
            "status": False,
            "message": str(error)
        }), 500