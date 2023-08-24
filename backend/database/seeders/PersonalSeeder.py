
from DatabaseSeeder import Seeder;
from factories.PersonalFactory import PersonalFactory;

class PersonalSeeder(Seeder):

    def seed(self) -> None:
        personal = PersonalFactory.generate();



a = PersonalSeeder()
a.seed()

