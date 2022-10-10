import { ListGroupItem } from "react-bootstrap";

export function WaterItem(props) {
  const { firstnames, lastnames } = props;
  const { taskaccomplished } = props;
  const fullname = firstnames + " " + lastnames;

  let remaining = 0;

  if(taskaccomplished.length < 3){
    let { length } = taskaccomplished;
    remaining = 3 - length;
  }

  console.log(taskaccomplished);

  return (
    <tr>
      <td><span style={{fontSize: "17px"}}>{fullname}</span></td>
      {taskaccomplished.map((value, key)=> (
        <td
          key={key}
        ></td> 
      ))}
      {remaining > 0 && (
        <td colSpan={remaining}></td>
      )}
    </tr>
  );
}
