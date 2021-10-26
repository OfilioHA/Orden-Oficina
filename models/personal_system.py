from app import db;

personal_system = db.Table('personal_system',
    db.Column('system_id', db.Integer, db.ForeignKey('system.id'), primary_key=True),
    db.Column('personal_id', db.Integer, db.ForeignKey('personal.id'), primary_key=True)
)