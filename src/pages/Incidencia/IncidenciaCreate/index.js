import React from "react";
import { ContainerHeader, ContainerBody, ModuleTitle } from "./styles";
import GestorDatos from "../../../components/Containers/GestorDatos";
import InputV1 from "../../../components/InputV1";
import TableV1 from "../../../components/TableV1";
import ButtonV1 from "../../../components/ButtonV1";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function IncidenciaCreate() {
  const navigate = useNavigate();

  return (
    <>
      <ContainerHeader>
        <ModuleTitle>Crear Incidencia</ModuleTitle>
      </ContainerHeader>
      <ContainerBody>
        <GestorDatos title="Formulario" width="400px">
          {/* <InputV1
            type="select"
            name="Problematica Predefinida"
            width="400px"
          /> */}
          <Select
            options={[
              { value: "1", label: "Cambio de Contraseña" },
              { value: "2", label: "Activacion de Windows" },
              { value: "3", label: "Instalacion de Programa Requerido" },
              { value: "4", label: "Lentitud en ordenador" },
              { value: "5", label: "Optimizacion de equipo" },
              { value: "6", label: "Reinstalacion de SO" },
              { value: "7", label: "Problemas con Office" },
            ]}
          />
          <br></br>
          <ButtonV1
            name="Crear Incidencia"
            onClick={() => {
              navigate("/home/registro-incidencia");
            }}
          />
        </GestorDatos>
      </ContainerBody>
    </>
  );
}

export default IncidenciaCreate;
