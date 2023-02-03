from manage import db
from entities.models.Personal import Personal
from entities.models.TaskAccomplished import TaskAccomplished;
from entities.models.TaskRound import TaskRounds;
from entities.models.Task import Task;
from entities.repositories.TaskRoundRepository import TaskRoundRepository;

from app.exceptions.TaskRoundExceptions import TaskRoundFullTasks;

MAX_AMOUNT = 3;

class TaskRoundService():

    @staticmethod
    def last_round(id):
        return TaskRoundRepository.task_active_round(id)

    @staticmethod
    def validate_tasks_amount(actual_round, person):
        tasks_accomplished = TaskRoundRepository.person_tasks_active_round(
            actual_round, 
            person
        );
        tasks_accomplished_amount = tasks_accomplished.count();
        if(tasks_accomplished_amount >= MAX_AMOUNT): 
            raise TaskRoundFullTasks("Ronda cumplida");

