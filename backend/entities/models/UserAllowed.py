from manage import db
from sqlalchemy_serializer import SerializerMixin;

class Allowed(SerializerMixin, db.Model):
    __tablename__ = "allowed"
    id = db.Column(db.Integer, primary_key=True)
    action_id = db.Column(
        db.Integer, 
        db.ForeignKey('actions.id'), 
        nullable=False, 
    )
    task_id = db.Column(
        db.Integer, 
        db.ForeignKey('tasks.id'), 
        nullable=False, 
    )
    user_id = db.Column(
        db.Integer, 
        db.ForeignKey('user.id'), 
        nullable=False, 
        unique=True
    )