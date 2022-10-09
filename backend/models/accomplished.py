from app import db;
from datetime import datetime;

class Accomplished(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)
    round_id = db.Column(db.Integer, db.ForeignKey('rounds.id'), nullable=False)
    date = db.Column(db.String, nullable=False)
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    modified_by = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.String, default=datetime.now(), nullable=False)
    modified_at = db.Column(db.String)
