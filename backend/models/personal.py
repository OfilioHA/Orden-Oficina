from app import db
from models.taskround import TaskRounds;
from .catalogs import *
from models.system import System
from models.user import User
from sqlalchemy.inspection import inspect;
from sqlalchemy_serializer import SerializerMixin;

personal_system = db.Table('personal_system',
    db.Column("id", db.Integer, primary_key=True),
    db.Column('system_id', db.Integer, db.ForeignKey('system.id'), primary_key=True),
    db.Column('personal_id', db.Integer, db.ForeignKey('personal.id'), primary_key=True)
)

class Personal(db.Model, SerializerMixin):

    serialize_rules = (
        '-taskscan.personal',
        '-gender.personal', 
        '-type.personal', 
        '-systems.personal',
        '-user.personal',
    )

    id = db.Column(db.Integer, primary_key=True)
    firstnames = db.Column(db.String, nullable=False)
    lastnames = db.Column(db.String, nullable=False)
    birthday = db.Column(db.String)
    active = db.Column(db.Boolean, default=True)
    
    #Genders Relations
    gender_id = db.Column(db.Integer, db.ForeignKey("genders.id"), nullable=False)
    gender = db.relationship("Gender", backref=db.backref("personal", lazy="dynamic"))
    
    #Worker Type Relations
    type_id = db.Column(db.Integer, db.ForeignKey("personal_type.id"), nullable=False)
    type = db.relationship("PersonalType", backref=db.backref("personal", lazy="dynamic"))

    user = db.relationship(
        "User", 
        backref="personal", 
        lazy=True, 
        foreign_keys="User.personal_id"
    )

    systems = db.relationship(
        "System",
        secondary=personal_system,
        lazy="subquery",
        backref=db.backref("personal", lazy=True),
    )

    taskscan = db.relationship(
        "Task",
        secondary="task_can",
        lazy="subquery",
        backref=db.backref("personal", lazy=True),
    )

    def list(self):
        listToReturn = [];
        personalList = self.query.all();
        for entity in personalList:
            listToReturn.append(entity.to_dict());
        return listToReturn