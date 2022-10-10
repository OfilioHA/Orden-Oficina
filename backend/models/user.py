from app import db;
from sqlalchemy_serializer import SerializerMixin;

class User(db.Model, SerializerMixin):

    serialize_rules = (
        '-password',
        '-personal_id',
    )
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(18))
    password = db.Column(db.String(128))
    personal_id = db.Column(db.Integer, db.ForeignKey('personal.id'), nullable=False, unique=True)
    is_active = db.Column(db.Boolean, default=True)
    roles = db.Column(db.Text)

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active