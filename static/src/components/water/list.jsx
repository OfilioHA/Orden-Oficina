import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import { WaterItem } from "./item";

export const WaterList = () => {
  const [persons, setPersons] = useState([]);
  const [taskOptions, setTaskOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/tasks");
        const { data } = response;
        setTaskOptions(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  useEffect(()=> {
    if(!selectedOption) return;
    async function getData(){
      try {
        const response = await axios.get(`/personal/${selectedOption}/tasks`);
        const { data } = response;
        setPersons(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [selectedOption])

  return (
    <>
      <div className="border border-bottom-0 py-3 px-2">
        <h5 className="mb-3">Listado de tareas</h5>
        <div className="d-flex">
          <Form.Select 
            size="sm"
            defaultValue={""}
            onClick={(e) => setSelectedOption(e.currentTarget.value)}
          >
            <option disabled value={""}>Seleccione una tarea</option>
            {taskOptions.map(({ name, id }, key) => (
              <option key={key} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th colSpan={3}  className="text-center">
              Veces Cumplidas
            </th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => {
            return <WaterItem key={index} {...person} />;
          })}
        </tbody>
      </Table>
    </>
  );
};
