from manage import db
from sqlalchemy_serializer import SerializerMixin;

class TaskRounds(db.Model, SerializerMixin):
    __tablename__ = "task_rounds"

    serialize_rules = (
        '-taskround.taskaccomplished',
    )

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(
        db.Integer, 
        db.ForeignKey('tasks.id'), 
        nullable=False, 
    )

    number = db.Column(db.Integer)   

    task = db.relationship(
        "Task", 
        backref=db.backref(
            "taskround", 
            lazy="dynamic"
        )
    )