import React from "react";
import {
  ContainerGestorDatos,
  Title,
  SCHeader,
  ContainerActions,
} from "./styles";

function GestorDatos({ children, title, actions, width, maxWidth }) {
  return (
    <ContainerGestorDatos width={width} maxWidth={maxWidth}>
      <SCHeader>
        <Title>{title}</Title>
        <ContainerActions>{actions}</ContainerActions>
      </SCHeader>
      {children}
    </ContainerGestorDatos>
  );
}

export default GestorDatos;
