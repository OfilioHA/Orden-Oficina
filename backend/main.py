import os;
from manage import app

def main():
    app.run(
        host=os.getenv('HOST'),
        debug=os.getenv('DEBUG'),
        port=os.getenv('PORT')
    )
    
if __name__ == '__main__':
    main()
