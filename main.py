import os
from app import *

def main():
    db.create_all()
    app.run(
        host=os.getenv('HOST'),
        debug=os.getenv('DEBUG'),
    )
    
if __name__ == '__main__':
    main()
