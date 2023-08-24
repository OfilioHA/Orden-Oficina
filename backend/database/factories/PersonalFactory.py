
from entities.models import Personal;
from DatabaseFactory import Factory;

class PersonalFactory(Factory):

    def __init__(self, instance) -> None:
        super().__init__(Personal)

    def generate(self) -> dict:
        return {
            "firstname": self.faker.name(),
            "lastname": self.faker.name(),
        }

