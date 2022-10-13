from app import app, db
from models.Personal import Personal;
from models.Task import Task;
from models.TaskRound import TaskRounds;
from models.TaskCan import TaskCan;
from models.TaskAccomplished import TaskAccomplished;
from models.Catalogs import Gender;
from flask import jsonify, request;

@app.route("/personal/list")
def personallist():
    personal = Personal.list();
    return jsonify(personal);   

# TODO:: Aplicar Subquery para ordenar en base a la ultima tarea cumplida.
# https://stackoverflow.com/questions/38999534/execute-flask-sqlalchemy-subquery

@app.route("/personal/<int:id>/tasks")
def personaltask(id):
    listtoreturn = [];

    activeround = TaskRounds.query\
        .join(Task)\
        .filter(Task.id == id)\
        .order_by(db.desc(TaskRounds.number))\
        .first();

    personal = Personal.query\
        .join(Gender)\
        .join(TaskCan)\
        .join(Task)\
        .filter(
            Gender.id != 2,
            Task.id == id,
        ).all()

    for entity in personal:

        entry = entity.to_dict(
            only=('id','firstnames', 'lastnames',),
        )

        tasklist =  TaskAccomplished.query\
            .join(Task, TaskAccomplished.task_id == Task.id)\
            .join(TaskRounds, TaskAccomplished.task_round_id == TaskRounds.id)\
            .join(Personal, TaskAccomplished.personal_id == Personal.id)\
            .filter(
                Personal.id == entity.id,
                TaskRounds.id == activeround.id
            ).all()


        entry['taskaccomplished'] = []
        for task in tasklist:
            entry['taskaccomplished']\
                .append(task.to_dict(
                    rules=('-personal',)
                )
            );

        listtoreturn.append(entry);

    return jsonify({
        "list": listtoreturn,
        "round": activeround.number
    })

@app.route("/personal/<int:id>/tasks", methods=['POST'])
def personaltaskaccomplished():
    req = request.get_json(force=True)
    print(req)