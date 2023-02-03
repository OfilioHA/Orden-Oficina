from manage import db;
from entities.models import TaskAccomplished;

class TaskAccomplishedService():

    @staticmethod
    def create(task_id, actual_round_id, person_id, date,time):
        new_task = TaskAccomplished(
            task_id,
            actual_round_id,
            person_id,
            date,
            time
        );
        db.session.add(new_task);
        db.session.commit();
        return new_task;