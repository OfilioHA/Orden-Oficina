from app import db
from sqlalchemy.inspection import inspect;
from sqlalchemy_serializer import SerializerMixin;

class Gender(db.Model, SerializerMixin):
    __tablename__ = "genders"
    id = db.Column(db.Integer, primary_key=True)
    abbreviation = db.Column(db.String(2))
    name = db.Column(db.String(12))

class Area(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    abbreviation = db.Column(db.String(12))

class PersonalType(db.Model, SerializerMixin):
    __tablename__ = "personal_type"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12))

class Action(db.Model, SerializerMixin):
    __tablename__ = "actions"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12))

