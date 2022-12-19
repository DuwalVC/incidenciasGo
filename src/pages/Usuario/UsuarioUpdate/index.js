import React from "react";
import { ContainerHeader, ContainerBody, ModuleTitle } from "./styles";
import GestorDatos from "../../../components/Containers/GestorDatos";
import InputV1 from "../../../components/InputV1";
// import TableV1 from "../../../components/TableV1";
import ButtonV1 from "../../../components/ButtonV1";

function UsuarioUpdate() {
  return (
    <>
      <ContainerHeader>
        <ModuleTitle>Actualizacion de Usuario</ModuleTitle>
      </ContainerHeader>
      <ContainerBody>
        <GestorDatos title="Formulario">
          <InputV1 name="Nombres" width="400px" />
          <InputV1 name="Apellidos" width="400px" />
          <InputV1 name="Fecha Nacimiento" width="400px" />
          <InputV1 name="Mail" width="400px" />
          <InputV1 name="Contraseña" width="400px" />
          <InputV1 name="numero telefono" width="400px" />
          <ButtonV1 name="Crear nuevo Usuario" />
        </GestorDatos>
      </ContainerBody>
    </>
  );
}

export default UsuarioUpdate;
