import { Button } from "react-bootstrap";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { taskPersonStore, taskInfoStore } from "../../stores/taskPerson";

export function TaskItem(props) {
  const { id, firstnames, lastnames } = props;
  const { taskaccomplished } = props;
  const [, setTaskPerson] = useRecoilState(taskPersonStore);
  const [taskInfo] = useRecoilState(taskInfoStore);

  const fullname = `${firstnames} ${lastnames}`;

  const findTask = (e) => {
    const { value } = e.currentTarget;
    const task = taskaccomplished
      .filter((element) => (element.id = value))
      .pop();
    setTaskPerson({
      id,
      fullname,
      task: { ...task },
    });
  };

  console.log(taskInfo["round"]["actual"], taskInfo["round"]["last"]);

  const newTask = () => {
    setTaskPerson({
      id,
      fullname,
    });
  };

  return (
    <tr>
      <td>
        <span style={{ fontSize: "17px" }}>{fullname}</span>
      </td>
      <td>
        <div className="d-flex task-buttons">
          {taskaccomplished.map((value, key) => (
            <div className="task-button-container" key={key}>
              <Button
                size="sm"
                value={value.id}
                className="rounded-circle"
                onClick={findTask}
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
            </div>
          ))}
        </div>
      </td>
      <td>
        {taskInfo["round"]["actual"] == taskInfo["round"]["last"] && (
          <div className="d-flex justify-content-center">
            <Button size="sm" value={id} onClick={newTask}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        )}
      </td>
    </tr>
  );
}
