import { FormGroup, FormCheck, FormLabel } from "react-bootstrap";

export function RadioField({
  field,
  form: { touched, errors, values },
  disabled = false,
  marginSize = 3,
  options = [],
  ...props
}) {
  const invalid = Boolean(touched[field.name] && errors[field.name]);

  return (
    <FormGroup className={`mb-${marginSize}`}>
      <FormLabel className="d-block">{props.label}</FormLabel>
      {options.map(({ id, name }) => (
        <FormCheck
          {...props}
          {...field}
          key={`${props.id}-${id}`}
          id={`${props.id}-${id}`}
          isInvalid={invalid}
          label={name}
          value={id}
          checked={values[field.name] ==  id}
        />
      ))}
    </FormGroup>
  );
}
