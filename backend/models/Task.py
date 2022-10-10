from app import db;
from sqlalchemy_serializer import SerializerMixin;

class Task(db.Model, SerializerMixin):
    __tablename__ = "tasks"

    serialize_rules = (
        '-personal.taskscan',
        '-taskaccomplished',
        '-taskround'
    )

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(12))

    def list(self): 
        listreturn = [];
        tasks = self.query.all();
        for entity in tasks:
            listreturn.append(entity.to_dict(
                rules=('-personal',)
            ));
        return listreturn