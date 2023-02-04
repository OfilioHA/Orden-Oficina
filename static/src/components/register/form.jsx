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
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useCallback, useEffect } from "react";
import { authFetch } from "../../libs/auth";

export function RegisterForm() {
  const validationSchema = Yup.object({
    firstnames: Yup.string().required(),
    lastnames: Yup.string().required(),
    birthday: Yup.date().required(),
    gender_id: Yup.number().required(),
    type_id: Yup.number().required(),
    systems: Yup.array().required(),
  });

  const initialValues = {
    firstnames: '',
    lastnames: '',
    birthday: '',
    gender_id: '',
    type_id: '',
    systems: []
  }

  const hanleSubmitFormik = useCallback((values) => {
    console.log(values);
  });

  
  useEffect(()=>{
    (async function(){
      const fetchs = [
        authFetch('/systems')
      ]
      const data = await Promise.all(fetchs);
    })();
  }, []);

  return (
    <Formik
      onSubmit={hanleSubmitFormik}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({handleSubmit, isSubmitting}) => (
        <Form
          onSubmit={handleSubmit}
        >
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
              options={[]}
              className="d-block w-100"
              isMultiSelect
              placeholder="Seleccione los sistemas"
            />
          </FormGroup>
          <FormGroup className="d-flex justify-content-end">
            <Button disabled={isSubmitting}>
              Registrarme
              <FontAwesomeIcon icon={faRocket} className="ms-2" />
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
}
