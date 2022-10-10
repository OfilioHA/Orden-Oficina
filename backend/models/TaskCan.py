from app import db
from sqlalchemy.orm import relationship, backref;
from sqlalchemy_serializer import SerializerMixin;

class TaskCan(SerializerMixin, db.Model):
    __tablename__ = "task_can"

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(
        db.Integer, 
        db.ForeignKey('tasks.id'), 
        nullable=False, 
    )
    personal_id = db.Column(
        db.Integer, 
        db.ForeignKey('personal.id'), 
        nullable=False, 
    )