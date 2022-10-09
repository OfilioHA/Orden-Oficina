import { ListGroupItem } from "react-bootstrap";

export function WaterItem(props) {
  const { firstnames, lastnames } = props;
  const fullname = firstnames + " " + lastnames;
  console.log(props);

  return (
    <ListGroupItem>
      <div className="d-flex">
        <span style={{ fontSize: "17px" }}>{fullname}</span>
      </div>
    </ListGroupItem>
  );
}
