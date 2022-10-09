from app import db
from datetime import datetime;
from sqlalchemy.inspection import inspect;
from sqlalchemy_serializer import SerializerMixin;


class Allowed(db.Model):
    __tablename__ = "allowed"
    id = db.Column(db.Integer, primary_key=True)
    action_id = db.Column(
        db.Integer, 
        db.ForeignKey('actions.id'), 
        nullable=False, 
    )
    task_id = db.Column(
        db.Integer, 
        db.ForeignKey('tasks.id'), 
        nullable=False, 
    )
    user_id = db.Column(
        db.Integer, 
        db.ForeignKey('user.id'), 
        nullable=False, 
        unique=True
    )

class Task(db.Model):
    __tablename__ = "tasks"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12))

class Gender(SerializerMixin, db.Model):
    __tablename__ = "genders"
    id = db.Column(db.Integer, primary_key=True)
    abbreviation = db.Column(db.String(2))
    name = db.Column(db.String(12))

class Action(db.Model):
    __tablename__ = "actions"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12))

class PersonalType(SerializerMixin, db.Model):
    __tablename__ = "personal_type"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12))

class Rounds(db.Model):
    __tablename__ = "rounds"
    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(
        db.Integer, 
        db.ForeignKey('tasks.id'), 
        nullable=False, 
    )
    number = db.Column(db.Integer)    
