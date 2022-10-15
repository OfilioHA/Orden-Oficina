from app import db;
from datetime import datetime;
from sqlalchemy_serializer import SerializerMixin;
from Mixins import UserMixin;

class TaskAccomplished(db.Model, SerializerMixin, UserMixin):

    serialize_rules = (
        '-personal.taskaccomplished',
    )

    def __init__(self, task_id, task_round_id, personal_id, date, time):
        UserMixin.__init__(self);
        self.task_id = task_id;
        self.task_round_id = task_round_id;
        self.personal_id  = personal_id;
        self.date = date;
        self.time = time;

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)
    task_round_id = db.Column(db.Integer, db.ForeignKey('task_rounds.id'), nullable=False)
    personal_id = db.Column(db.Integer, db.ForeignKey('personal.id'), nullable=False)
    date = db.Column(db.String, nullable=False)
    time = db.Column(db.String, nullable=False)
    created_at = db.Column(db.String, default=datetime.now().strftime("%Y-%m-%d %H:%M"), nullable=False)
    modified_at = db.Column(db.String)

    personal = db.relationship(
        "Personal", 
        backref=db.backref(
            "taskaccomplished", 
            lazy="dynamic"
        )
    )

