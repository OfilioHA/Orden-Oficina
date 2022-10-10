from app import db;
from datetime import datetime;
from sqlalchemy_serializer import SerializerMixin;

class TaskAccomplished(db.Model, SerializerMixin):

    serialize_rules = (
        '-personal.taskaccomplished',
    )

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)
    task_round_id = db.Column(db.Integer, db.ForeignKey('task_rounds.id'), nullable=False)
    personal_id = db.Column(db.Integer, db.ForeignKey('personal.id'), nullable=False)
    date = db.Column(db.String, nullable=False)
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    modified_by = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.String, default=datetime.now(), nullable=False)
    modified_at = db.Column(db.String)

    personal = db.relationship(
        "Personal", 
        backref=db.backref(
            "taskaccomplished", 
            lazy="dynamic"
        )
    )

