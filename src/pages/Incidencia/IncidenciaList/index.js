import React from "react";
import { ContainerHeader, ContainerBody, ModuleTitle } from "./styles";
import GestorDatos from "../../../components/Containers/GestorDatos";
import InputV1 from "../../../components/InputV1";
import TableV1 from "../../../components/TableV1";
import ButtonV1 from "../../../components/ButtonV1";

function IncidenciaList() {
  return (
    <>
      <ContainerHeader>
        <ModuleTitle>Listado de Incidencias</ModuleTitle>
      </ContainerHeader>
      <ContainerBody>
        <GestorDatos title="Listado Personal">
          {/* <InputV1 name="Buscar" width="400px" /> */}
          <TableV1
            containerWidth="500px"
            tableWidth="100%"
            head={
              <>
                <th>Nombre y Apellido</th>
                <th>Incidencia</th>
                {/* <th></th> */}
              </>
            }
            body={
              <>
                {/* <tr>
                  <td>Jorge Mendoza</td>
                  <td>76057563</td>
                  <td>alta</td>
                </tr> */}
                {/* <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr> */}
              </>
            }
          />
        </GestorDatos>
        <GestorDatos title="Listado Publico">
          {/* <InputV1 name="Buscar" width="400px" /> */}
          <TableV1
            containerWidth="500px"
            tableWidth="100%"
            head={
              <>
                <th>Nombre y Apellido</th>
                <th>Incidencia</th>
                {/* <th></th> */}
              </>
            }
            body={
              <>
                <tr>
                  <td>Jorge Mendoza</td>
                  <td>76057563</td>
                  {/* <td>alta</td> */}
                </tr>
              </>
            }
          />
        </GestorDatos>
      </ContainerBody>
    </>
  );
}

export default IncidenciaList;
