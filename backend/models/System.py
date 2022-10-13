from app import db;
from sqlalchemy_serializer import SerializerMixin;

class System(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    abbreviation = db.Column(db.String(12))
    
