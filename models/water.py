from datetime import datetime;
from app import db;

class Water(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    personal_id = db.Column(db.Integer, db.ForeignKey('personal.id'), nullable=False)
    created_by = db.Column(db.Integer, db.ForeignKey('personal.id'), nullable=False)
    modified_by = db.Column(db.Integer, db.ForeignKey('personal.id'), nullable=False)
    created_at = db.Column(db.String, default=datetime.now(), nullable=False)
    modified_at = db.Column(db.String)


