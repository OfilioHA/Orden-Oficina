from models.personal import Personal;
from models.user import User;
from models.water import Water;
from models.system import System;
from models.fumigation import Fumigation;

def personalList():
    kk = Personal()
    print(kk.list());
    return "Queso"    