from app import db
from models.Personal import Personal
from models.TaskAccomplished import TaskAccomplished;
from models.TaskRound import TaskRounds;
from models.Task import Task;

class TaskRoundService():
    model = TaskRounds;

    @staticmethod
    def lastround(id):
        return TaskRounds.query\
            .join(Task)\
            .filter(Task.id == id)\
            .order_by(db.desc(TaskRounds.number))\
            .first();

    @staticmethod
    def getamount(id, person):
        return TaskAccomplished.query\
            .join(TaskRounds, TaskAccomplished.task_round_id == TaskRounds.id)\
            .join(Personal, TaskAccomplished.personal_id == Personal.id)\
            .filter(
                TaskRounds.id == id,
                Personal.id == person
            ).count();

