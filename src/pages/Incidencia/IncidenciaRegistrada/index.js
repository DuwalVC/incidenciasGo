import React from "react";
import { ContainerHeader, ContainerBody, ModuleTitle } from "./styles";
import GestorDatos from "../../../components/Containers/GestorDatos";
import InputV1 from "../../../components/InputV1";
// import TableV1 from "../../../components/TableV1";
import ButtonV1 from "../../../components/ButtonV1";
import TextFieldV1 from "../../../components/TextFieldV1";
import { Link, useNavigate } from "react-router-dom";

function IncidenciaRegistrada() {
  var navigate = useNavigate();

  return (
    <>
      <ContainerHeader>
        <ModuleTitle>Crear Incidencia</ModuleTitle>
      </ContainerHeader>
      <ContainerBody>
        <GestorDatos title="Formulario">
          <TextFieldV1
            // name="Registro exitoso"
            value="Registro exitoso"
            width="400px"
            details
          />
          <ButtonV1
            name="Regresar"
            onClick={async () => {
              console.log("ingreso");
              navigate("/home/nueva-incidencia");
            }}
          />
        </GestorDatos>
      </ContainerBody>
    </>
  );
}

export default IncidenciaRegistrada;
