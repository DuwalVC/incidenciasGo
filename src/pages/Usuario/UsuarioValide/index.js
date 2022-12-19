import React, { useState } from "react";
import ButtonV1 from "../../../components/ButtonV1";
import GestorDatos from "../../../components/Containers/GestorDatos";
import InputV1 from "../../../components/InputV1";
import { ContainerBody } from "./styles";
import { postAccess } from "../../../servicios/api";
import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom";

function UsuarioValide() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const navigate = useNavigate();

  return (
    <ContainerBody>
      <GestorDatos title="Iniciar Sesion" width="80vh" maxWidth="360px">
        <InputV1
          name="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <InputV1
          name="Contraseña"
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <ButtonV1
          name="Validar"
          onClick={async () => {
            const response = await postAccess();
            console.log("no ingreso");
            console.log(response);
            if (response.data.validacion === true) {
              // <Link to={`/nuevo-usuario`}>Your Name</Link>;
              if (correo === "jorge.mendoza@gmail.com") {
                navigate("/home/nueva-incidencia");
              } else if (correo === "juan.montoro@gmail.com") {
                navigate("/home/lista-incidencia");
              }
              console.log("ingreso");
            }
          }}
        />
      </GestorDatos>
    </ContainerBody>
  );
}

export default UsuarioValide;
