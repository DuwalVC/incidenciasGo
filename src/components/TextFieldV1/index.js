import { ContainerTextField, SCLabel, SCInput } from "./styles";
function TextFieldV1({ name, placeholder, width, ...rest }) {
  return (
    <ContainerTextField width={width}>
      <SCLabel details={rest.details}>{name}</SCLabel>
      <SCInput {...rest} readOnly={rest.details} />
    </ContainerTextField>
  );
}

export default TextFieldV1;
