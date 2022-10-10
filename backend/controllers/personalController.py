from pprint import pprint
from app import app, db
from models.personal import Personal;
from models.user import User;
from models.system import System;
from models.Task import Task;
from models.taskround import TaskRounds;
from models.TaskCan import TaskCan;
from models.TaskAccomplished import TaskAccomplished;
from models.catalogs import Gender;
from flask import jsonify;

@app.route("/personal/list")
def personallist():
    personal = Personal.list();
    return jsonify(personal);   

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

        entry['taskaccomplished'] =  TaskAccomplished.query\
            .join(Task, TaskAccomplished.task_id == Task.id)\
            .join(TaskRounds, TaskAccomplished.task_round_id == TaskRounds.id)\
            .join(Personal, TaskAccomplished.personal_id == Personal.id)\
            .filter(
                Personal.id == entity.id,
                TaskRounds.id == activeround.id
            ).all()


        tasklist = []
        for task in entry['taskaccomplished']:
            tasklist.append(task.to_dict(rules=('-personal',)));

        entry['taskaccomplished'] = tasklist;

        listtoreturn.append(entry);

    return jsonify(listtoreturn)