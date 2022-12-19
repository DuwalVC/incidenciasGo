import { SCButton } from "./styles";

function ButtonV1({ name, ...rest }) {
  return <SCButton {...rest}>{name}</SCButton>;
}

export default ButtonV1;
