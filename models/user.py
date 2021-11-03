from app import db;

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(18))
    password = db.Column(db.String(128))
    personal_id = db.Column(db.Integer, db.ForeignKey('personal.id'), nullable=False, unique=True)
    