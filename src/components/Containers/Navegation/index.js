import React from "react";
import {
  SCh1,
  ContainerNavegation,
  ContainerButtons,
  ContainerUser,
} from "./styles";

function Navegation({ children }) {
  return (
    <ContainerNavegation>
      <SCh1>Test App</SCh1>
      <ContainerButtons>{children}</ContainerButtons>
      <ContainerUser />
    </ContainerNavegation>
  );
}

export default Navegation;
