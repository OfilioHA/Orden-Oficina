from flask import jsonify, request;
from manage import app
from entities.models import Personal;

from app.services import TaskRoundService;
from app.services import PersonalService;
from app.services import TaskAccomplishedService;

@app.route("/personal")
def personal_list():
    personal = Personal.list();
    return jsonify(personal);   

@app.route("/personal/<int:id>/tasks", methods=['POST'])
def personaltaskaccomplished():
    req = request.get_json(force=True)
    print(req)