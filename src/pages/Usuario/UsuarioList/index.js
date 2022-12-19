import React from "react";
import { ContainerHeader, ContainerBody, ModuleTitle } from "./styles";
import GestorDatos from "../../../components/Containers/GestorDatos";
import InputV1 from "../../../components/InputV1";
import TableV1 from "../../../components/TableV1";
import ButtonV1 from "../../../components/ButtonV1";

function UsuarioList() {
  return (
    <>
      <ContainerHeader>
        <ModuleTitle>Usuarios Listado</ModuleTitle>
      </ContainerHeader>
      <ContainerBody>
        <GestorDatos
          title="Listado"
          actions={
            <>
              <ButtonV1 name="Crear nuevo Usuario" />
            </>
          }
        >
          <InputV1 name="Buscar" width="400px" />
          <TableV1
            containerWidth="500px"
            tableWidth="100%"
            head={
              <>
                <th>Nombre y Apellido</th>
                <th>Documento</th>
                <th></th>
              </>
            }
            body={
              <>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
              </>
            }
          />
        </GestorDatos>
        <GestorDatos
          title="Listado"
          actions={
            <>
              <ButtonV1 name="Crear nuevo Usuario" />
            </>
          }
        >
          <InputV1 name="Buscar" width="400px" />
          <TableV1
            containerWidth="500px"
            tableWidth="100%"
            head={
              <>
                <th>Nombre y Apellido</th>
                <th>Documento</th>
                <th></th>
              </>
            }
            body={
              <>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
              </>
            }
          />
        </GestorDatos>
        <GestorDatos
          title="Listado"
          actions={
            <>
              <ButtonV1 name="Crear nuevo Usuario" />
            </>
          }
        >
          <InputV1 name="Buscar" width="400px" />
          <TableV1
            containerWidth="500px"
            tableWidth="100%"
            head={
              <>
                <th>Nombre y Apellido</th>
                <th>Documento</th>
                <th></th>
              </>
            }
            body={
              <>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
                <tr>
                  <td>Duwal Varillas Castro</td>
                  <td>76057562</td>
                  <td>accion</td>
                </tr>
              </>
            }
          />
        </GestorDatos>
      </ContainerBody>
    </>
  );
}

export default UsuarioList;
