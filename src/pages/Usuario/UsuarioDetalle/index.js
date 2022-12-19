import React from "react";
import { ContainerHeader, ContainerBody, ModuleTitle } from "./styles";
import GestorDatos from "../../../components/Containers/GestorDatos";
import InputV1 from "../../../components/InputV1";
// import TableV1 from "../../../components/TableV1";
import ButtonV1 from "../../../components/ButtonV1";
import TextFieldV1 from "../../../components/TextFieldV1";
import { Link, useNavigate } from "react-router-dom";

function UsuarioDetalle() {
  var navigate = useNavigate();

  return (
    <>
      <ContainerHeader>
        <ModuleTitle>Usuario Detalle</ModuleTitle>
      </ContainerHeader>
      <ContainerBody>
        <GestorDatos
          title="Formulario"
          actions={
            <>
              <ButtonV1
                name="Actualizar"
                onClick={() => navigate("/nuevo-usuario")}
              />
              <Link to="/actualizacion-usuario">actulaizar usuario</Link>
            </>
          }
        >
          <TextFieldV1
            name="Nombres"
            value="Duwal Abel"
            width="400px"
            details
          />
          <TextFieldV1
            name="Apellidos"
            value="Varillas Castro"
            width="400px"
            details
          />
          <TextFieldV1
            name="Fecha Nacimiento"
            value="12/12/2022"
            width="400px"
            details
          />
          <TextFieldV1
            name="Mail"
            value="duwal.v.c@icloud"
            width="400px"
            details
          />
          <TextFieldV1
            name="Contraseña"
            value="contra123"
            width="400px"
            details
          />
          <TextFieldV1
            name="numero telefono"
            value="987654321"
            width="400px"
            details
          />
        </GestorDatos>
      </ContainerBody>
    </>
  );
}

export default UsuarioDetalle;
