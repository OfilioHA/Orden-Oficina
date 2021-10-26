from app import db;

personal_user = db.Table('personal_user',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('personal_id', db.Integer, db.ForeignKey('personal.id'), primary_key=True)
)
