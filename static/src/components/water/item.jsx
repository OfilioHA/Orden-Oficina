import { Button } from "react-bootstrap";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function WaterItem(props) {
  const { id, firstnames, lastnames } = props;
  const { taskaccomplished } = props;
  const fullname = `${firstnames} ${lastnames}`;

  return (
    <tr>
      <td>
        <span style={{ fontSize: "17px" }}>{fullname}</span>
      </td>
      <td>
        <div className="d-flex justify-content-between">
          {taskaccomplished.map((value, key) => (
            <Button
              key={key}
              size="sm"
              value={value.id}
              className="rounded-circle"
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          ))}
        </div>
      </td>
      <td>
        <Button size="sm" value={id}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </td>
    </tr>
  );
}
