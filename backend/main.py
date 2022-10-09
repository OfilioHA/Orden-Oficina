import os
from app import db, app

def main():
    db.create_all()
    app.run(
        host=os.getenv('HOST'),
        debug=os.getenv('DEBUG'),
        port=os.getenv('PORT')
    )
    
if __name__ == '__main__':
    main()
