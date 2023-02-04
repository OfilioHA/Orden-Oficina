from flask import jsonify, request;
from manage import app
from entities.models import Personal;

from app.services import TaskRoundService;
from app.services import PersonalService;
from app.services import TaskAccomplishedService;

@app.route("/personal/list")
def personal_list():
    personal = Personal.list();
    return jsonify(personal);   

# TODO:: Aplicar Subquery para ordenar en base a la ultima tarea cumplida.
# https://stackoverflow.com/questions/38999534/execute-flask-sqlalchemy-subquery

@app.route("/personal/<int:id>/tasks")
def personaltask(id):

    active_round = TaskRoundService.last_round(id);
    personal = PersonalService.from_task(id);
    personal = TaskAccomplishedService.from_person_dicts(personal, active_round);
    
    return jsonify({
        "list": personal,
        "round": active_round.number
    })

@app.route("/personal/<int:id>/tasks", methods=['POST'])
def personaltaskaccomplished():
    req = request.get_json(force=True)
    print(req)