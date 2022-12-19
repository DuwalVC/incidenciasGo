import { ContainerInput, SCLabel, SCInput } from "./styles";
function InputV1({ name, width, maxWidth, ...rest }) {
  return (
    <ContainerInput width={width} maxWidth={maxWidth}>
      <SCLabel>{name}</SCLabel>
      <SCInput {...rest} />
    </ContainerInput>
  );
}

export default InputV1;
