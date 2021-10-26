from app import db;

class System(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    abbreviation = db.Column(db.String(12))
    
