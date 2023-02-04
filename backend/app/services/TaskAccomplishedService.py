from manage import db;
from entities.models import TaskAccomplished;
from entities.models import Task;
from entities.models import TaskRounds;
from entities.models import Personal;

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

    @staticmethod
    def from_person(personal, active_round):
        return TaskAccomplished.query\
            .join(Task, TaskAccomplished.task_id == Task.id)\
            .join(TaskRounds, TaskAccomplished.task_round_id == TaskRounds.id)\
            .join(Personal, TaskAccomplished.personal_id == Personal.id)\
            .filter(
                Personal.id == personal.id,
                TaskRounds.id == active_round.id
            )

    @staticmethod
    def from_person_dicts(personal, active_round):

        personal_list = [];

        for entry in personal:

            tasklist = __class__.from_person(entry, active_round).all()

            entry = entry.to_dict(
                only=('id','firstnames', 'lastnames',),
            )

            entry['taskaccomplished'] = [
                task.to_dict(rules=('-personal',)) 
                for task in tasklist
            ]

            personal_list.append(entry);

        return personal_list;