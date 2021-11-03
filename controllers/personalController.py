from models.personal import Personal;
from models.user import User;
from models.system import System;

def personalList():
    kk = Personal()
    print(kk.list());
    return "Queso"    