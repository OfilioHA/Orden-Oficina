from app import db
from sqlalchemy_serializer import SerializerMixin;

personal_system = db.Table('personal_system',
    db.Column("id", db.Integer, primary_key=True),
    db.Column('area_id', db.Integer, db.ForeignKey('area.id'), primary_key=True),
    db.Column('personal_id', db.Integer, db.ForeignKey('personal.id'), primary_key=True)
)

class Personal(db.Model, SerializerMixin):

    serialize_rules = (
        '-taskscan.personal',
        '-gender.personal', 
        '-type.personal', 
        '-areas.personal',
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

    areas = db.relationship(
        "Area",
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
        listtoreturn = [];
        personallist = self.query.all();
        for entity in personallist:
            listtoreturn.append(entity.to_dict());
        return listtoreturn