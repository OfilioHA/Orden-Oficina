from app import db;
from .personal_system import personal_system;
from .personal_user import personal_user;

class Personal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    names = db.Column(db.String)
    lastnames = db.Column(db.String)
    birthday = db.Column(db.String)
    user = db.relationship('User', secondary=personal_user, lazy='subquery', backref=db.backref('user',lazy=True))
    systems = db.relationship('System', secondary=personal_system, lazy='subquery', backref=db.backref('system',lazy=True))
    waters = db.relationship('Water', backref='personal', lazy=True, foreign_keys="Water.personal_id")
    fumigations = db.relationship('Fumigation', backref='personal', lazy=True, foreign_keys="Fumigation.personal_id")


    def list(self):
        return self.query.all();
