from app import db;
from .personal_system import personal_system;
from .catalogs import *;

class Personal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    names = db.Column(db.String, nullable=False)
    lastnames = db.Column(db.String, nullable=False)
    birthday = db.Column(db.String)
    gender_id = db.Column(db.Integer, db.ForeignKey('genders_ctg.id'), nullable=False)
    user = db.relationship('User', backref='personal', lazy=True, foreign_keys="User.personal_id")
    systems = db.relationship('System', secondary=personal_system, lazy='subquery', backref=db.backref('system',lazy=True))


    def list(self):
        return self.query.all();
