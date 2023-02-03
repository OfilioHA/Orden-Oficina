import {
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";
import BootstrapSelect from "react-bootstrap-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export function RegisterForm() {
  const systems = [
    {
      labelKey: "optionItem1",
      value: "Option item 1",
    },
    {
      labelKey: "optionItem2",
      value: "Option item 2",
    },
  ];

  return (
    <Form>
      <FormGroup className="mb-3">
        <FormLabel>Nombres</FormLabel>
        <FormControl />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>Apellidos</FormLabel>
        <FormControl />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>Fecha de Nacimiento</FormLabel>
        <FormControl />
      </FormGroup>
      <FormGroup className="mb-3 d-flex justify-content-between">
        <div>
          <FormLabel>Genero</FormLabel>
          <div>
            <FormCheck type="radio" label="Hombre" inline />
            <FormCheck type="radio" label="Mujer" inline />
          </div>
        </div>
        <div>
          <FormLabel>Tipo</FormLabel>
          <div>
            <FormCheck type="radio" label="Trabajador" inline />
            <FormCheck type="radio" label="Pasante" inline />
          </div>
        </div>
      </FormGroup>
      <FormGroup className="mb-5">
        <FormLabel>Sistemas</FormLabel>
        <BootstrapSelect
          options={systems}
          className="d-block w-100"
          isMultiSelect
          placeholder="Seleccione los sistemas"
        />
      </FormGroup>
      <FormGroup className="d-flex justify-content-end">
        <Button>
          Registrarme
          <FontAwesomeIcon icon={faRocket} className='ms-2' />
        </Button>
      </FormGroup>
    </Form>
  );
}
