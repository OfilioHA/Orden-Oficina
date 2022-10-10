from app import db
from sqlalchemy.inspection import inspect;
from sqlalchemy_serializer import SerializerMixin;

class Gender(db.Model, SerializerMixin):
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

 
