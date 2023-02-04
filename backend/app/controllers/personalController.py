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

@app.route("/personal/<int:id>/tasks", methods=['POST'])
def personaltaskaccomplished():
    req = request.get_json(force=True)
    print(req)