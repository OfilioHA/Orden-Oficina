
from faker import Faker;
from flask_sqlalchemy import Model
from manage import db;

class Factory:

    def __init__(self, instance) -> None:
        self.instance = instance
        self.faker = Faker()

    def generate(self) -> dict:
        pass;

    def make(self, amount = 1) -> list(Model):
        instances = [];
        for x in range(amount):
            model = self.instance(self.generate().values)
            instances.append(model)
        return instances
    
    def create(self, amount = 1) -> list(Model):
        instances = self.make(amount)
        db.session.add_all(instances);





