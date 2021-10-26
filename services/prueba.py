from app import db;
from models.water import Water;
from models.personal import Personal;
from models.user import User;

wa = Water(1)
db.session.add(wa)
db.session.commit()

walist = Water.query.all()
for a in walist:
    print(wa.created_at)