from manage import db;
from entities.models import Personal;
from entities.models import Task;
from entities.models import TaskRounds;
from entities.models import TaskCan;
from entities.models import TaskAccomplished;
from entities.models import Gender;

class PersonalService():

    @staticmethod
    def from_task(task_id, women=False):
        
        personal = Personal.query\
            .join(Gender)\
            .join(TaskCan)\
            .join(Task)\
            .filter(Task.id == task_id)
        
        if (not women): personal.filter(Gender.id != 2);
        
        return personal.all();