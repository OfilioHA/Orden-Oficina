import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { WaterItem } from "./item";

export const WaterList = () => {
  
    const [persons, setPersons] = useState([]);
  
    useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/workers/list/fullnames");
        const { data } = response;
        setPersons(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <ListGroup>
        {persons.map((person, index)=> {
            return (
                <WaterItem 
                    key={index} 
                    {...person}
                />
            )
        })}
    </ListGroup>
  );
};
