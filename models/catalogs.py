from app import db
from datetime import datetime;

class Action(db.Model):
    __tablename__ = "actions"
    id = db.Column(db.Integer, primary_key=True)
    action_id = db.Column(db.Integer, db.ForeignKey('actions_ctg.id'), nullable=False, unique=True)
    created_at = db.Column(db.String, default=datetime.now(), nullable=False)
    modified_at = db.Column(db.String)
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    modified_by = db.Column(db.Integer, db.ForeignKey('user.id'))


class Gender(db.Model):
    __tablename__ = "genders_ctg"
    id = db.Column(db.Integer, primary_key=True)
    abbreviation = db.Column(db.String(2))
    name = db.Column(db.String(12))


class ActionCtg(db.Model):
    __tablename__ = "actions_ctg"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12))

class PersonalTypeCtg(db.Model):
    __tablename__ = "personal_type_ctg"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12))
