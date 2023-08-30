import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import BootstrapSelect from "react-bootstrap-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TextField } from "../utils/forms/TextField";
import { RadioField } from "../utils/forms/RadioField";
import { useFetch } from "../../hooks/useFetch";

export function RegisterForm() {

  const fetcher = useFetch();

  const defaultState = {
    loading: true,
    data: [],
  };

  const [systems, setSystems] = useState(defaultState);
  const [types, setTypes] = useState(defaultState);
  const [genders, setGenders] = useState(defaultState);
  const [tasks, setTasks] = useState(defaultState);

  useEffect(() => {
    (async function () {
      const fetchs = [
        fetch("/systems"),
        fetch("/personal/types"),
        fetch("/personal/genders"),
        fetch("/tasks/list"),
      ];

      const setters = [setSystems, setTypes, setGenders, setTasks];

      const data = await Promise.all(fetchs);
      data.forEach(async (respond, index) => {
        const values = await respond.json();
        const newState = {
          data: values,
          loading: false,
        };
        setters[index](newState);
      });
    })();
  }, []);

  const system_formated = useMemo(
    () =>
      systems.data.map((e) => {
        return {
          labelKey: e.id,
          value: e.name,
        };
      }),
    [systems]
  );

  const validationSchema = Yup.object({
    firstnames: Yup.string().required(),
    lastnames: Yup.string().required(),
    birthday: Yup.date().required(),
    gender_id: Yup.number().required(),
    type_id: Yup.number().required(),
    systems: Yup.array().required(),
  });

  const initialValues = {
    firstnames: "",
    lastnames: "",
    birthday: "",
    gender_id: "",
    type_id: "",
    systems: [],
  };

  const hanleSubmitFormik = useCallback((values) => {
    (async function(){
      const response = await fetcher.call('/personal', {
        method: 'POST',
        data: values
      });
      console.log(response);
    })();
  });

  return (
    <Formik
      onSubmit={hanleSubmitFormik}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            type="text"
            label="Nombres"
            name="firstnames"
            component={TextField}
            id="personal-firstnames"
          />
          <Field
            type="text"
            label="Apellidos"
            name="lastnames"
            component={TextField}
            id="personal-lastnames"
          />
          <Field
            type="date"
            label="Fecha de Nacimiento"
            name="birthday"
            component={TextField}
            id="personal-birthday"
          />
          <div className="d-flex justify-content-between">
            <Field
              type="radio"
              label="Genero"
              name="gender_id"
              id="personal-gender"
              component={RadioField}
              options={genders.data}
            />
            <Field
              type="radio"
              label="Tipo"
              name="type_id"
              id="personal-type"
              className="me-5"
              component={RadioField}
              options={types.data}
            />
          </div>
          <FormGroup className="mb-3">
            <FormLabel>Sistemas</FormLabel>
            <BootstrapSelect
              options={system_formated}
              disabled={systems.loading}
              className="d-block w-100"
              placeholder="Seleccione los sistemas"
              isMultiSelect
            />
          </FormGroup>
          <Field
            type="checkbox"
            label="Tareas que realiza"
            name="task_id"
            id="personal-tasks"
            component={RadioField}
            options={tasks.data}
          />
          <FormGroup className="d-flex justify-content-end">
            <Button disabled={fetcher.loading} type="submit">
              Registrarme
              <FontAwesomeIcon icon={faRocket} className="ms-2" />
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
}
