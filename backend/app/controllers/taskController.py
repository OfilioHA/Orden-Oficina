from manage import app, db;
from flask import jsonify, request;
from flask_praetorian import auth_required;

from app.services import TaskRoundService;
from app.services import TaskAccomplishedService;
from app.services import PersonalService;

from app.exceptions import TaskRoundFullTasks;

from entities.models import Task;

@app.route("/tasks/list")
def tasks_list():
    tasks = Task().list();
    return jsonify(tasks);


@app.route("/tasks/<int:id>/personal")
def personal_task(id):

    active_round = TaskRoundService.last_round(id);
    personal = PersonalService.from_task(id);
    personal = TaskAccomplishedService.from_person_dicts(personal, active_round);
    
    return jsonify({
        "list": personal,
        "round": active_round.number
    })


# TODO:: Aplicar Subquery para ordenar en base a la ultima tarea cumplida.
# https://stackoverflow.com/questions/38999534/execute-flask-sqlalchemy-subquery
@app.route("/tasks/accomplished/create", methods=["POST"])
@auth_required
def task_accomplished_create():
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