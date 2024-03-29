import { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { taskInfoStore, taskPersonStore } from "../../stores/taskPerson";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authFetch } from "../../libs/auth";
import axios from "axios";

export const TaskForm = () => {
  const [taskPerson, setTaskPerson] = useRecoilState(taskPersonStore);
  const [taskInfo] = useRecoilState(taskInfoStore);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const textTitle = "Agregar nueva tarea";

  useEffect(() => {
    if (!taskPerson) return;
    const task = { ...taskPerson.task };
    if (!task.id) {
      const now = new Date();
      task.date = now.toISOString().substr(0, 10);
      let hours = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
      let minutes =
        now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
      task.time = `${hours}:${minutes}`;
    }
    setDate(task.date);
    setTime(task.time);
  }, [taskPerson]);

  const cleanAll = () => {
    setTaskPerson(null);
    setDate("");
    setTime("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const json = {
      date,
      time,
      person: taskPerson.id,
      task_id: taskInfo["task"],
    };

    if (taskPerson.task) json["accomplished_id"] = taskPerson.task.id;

    authFetch("/tasks/accomplished/create", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(json),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-end">
          <FontAwesomeIcon
            icon={faXmark}
            style={{ cursor: "pointer" }}
            onClick={cleanAll}
          />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{textTitle}</Card.Title>
        {taskPerson && (
          <Card.Text className="my-3">{taskPerson.fullname}</Card.Text>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={date}
              disabled={taskPerson && taskPerson.task}
              onChange={(e) => setDate(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Hora <span className="text-muted">24hrs</span>
            </Form.Label>
            <Form.Control
              type="time"
              value={time}
              disabled={taskPerson && taskPerson.task}
              onChange={(e) => setTime(e.currentTarget.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            disabled={!taskPerson || (taskPerson && taskPerson.task)}
          >
            Agregar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
