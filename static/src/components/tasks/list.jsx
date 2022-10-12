import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import { useRecoilState, useResetRecoilState } from "recoil";
import { taskInfoStore, taskPersonStore } from "../../stores/taskPerson";
import { TaskItem } from "./item";

export const TaskList = () => {
  const [taskInfo, setTaskInfo] = useRecoilState(taskInfoStore);
  const [persons, setPersons] = useState([]);
  const [taskOptions, setTaskOptions] = useState([]);
  const [roundOptions, setRoundOptions] = useState([]);
  const resetTaskInfoStore = useResetRecoilState(taskInfoStore);
  const resetTaskPersonStore = useResetRecoilState(taskPersonStore);

  let numberRoundDefault = null;

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/tasks/list");
        const { data } = response;
        setTaskOptions(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    return () => {
      resetTaskInfoStore()
      resetTaskPersonStore()
    };
  }, []);

  useEffect(() => {
    if (!taskInfo["task"]) return;
    async function getData() {
      try {
        const response = await axios.get(`/personal/${taskInfo["task"]}/tasks`);
        const { data } = response;
        setPersons(data.list);
        numberRoundDefault = data.round;
        const rounds = Array.from({ length: data.round }, (_, i) => i + 1);
        setTaskInfo({
          ...taskInfo,
          ["round"]: {
            actual: parseInt(numberRoundDefault),
            last: parseInt(numberRoundDefault),
          },
        });
        setRoundOptions(rounds);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [taskInfo["task"]]);

  const handleRound = (event) => {
    const newTaskRound = {
      actual: parseInt(event.currentTarget.value),
      last: taskInfo["round"]["last"],
    };
    setTaskInfo({
      ...taskInfo,
      ["round"]: { ...newTaskRound },
    });
  };

  const handleTaskSelected = (value) => {
    setTaskInfo({
      ...taskInfo,
      ["task"]: parseInt(value),
    });
  };

  return (
    <>
      <div className="border border-bottom-0 py-3 px-2">
        <h5 className="mb-3">Listado de tareas</h5>
        <div className="d-flex">
          <Form.Select
            size="sm"
            defaultValue={""}
            onChange={(e) => handleTaskSelected(e.currentTarget.value)}
            style={{ width: "180px" }}
            className="me-3"
          >
            <option disabled value={""}>
              Seleccione una tarea
            </option>
            {taskOptions.map(({ name, id }, key) => (
              <option key={key} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
          {roundOptions.length > 0 && (
            <Form.Select
              size="sm"
              defaultValue={numberRoundDefault}
              onChange={(e) => handleRound(e)}
              style={{ width: "100px" }}
            >
              <option disabled value={""}>
                Seleccione una ronda
              </option>
              {roundOptions.map((value, key) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </Form.Select>
          )}
        </div>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th className="text-center">Veces Cumplidas</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!taskInfo["task"] && (
            <tr>
              <td colSpan={3} className="py-4">
                <div className="d-flex justify-content-center">
                  <h5>No se seleccionado una tarea</h5>
                </div>
              </td>
            </tr>
          )}
          {persons.length > 0 &&
            persons.map((person, index) => {
              return <TaskItem key={index} {...person} />;
            })}
        </tbody>
      </Table>
    </>
  );
};
