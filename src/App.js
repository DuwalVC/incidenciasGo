import Layout from "./components/Containers/Layout";
import { ContainerApp } from "./styles";
import UsuarioList from "./pages/Usuario/UsuarioList";
import UsuarioCreate from "./pages/Usuario/UsuarioCreate";
import UsuarioDetalle from "./pages/Usuario/UsuarioDetalle";

//React Router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UsuarioUpdate from "./pages/Usuario/UsuarioUpdate";
import UsuarioValide from "./pages/Usuario/UsuarioValide";
import IncidenciaCreate from "./pages/Incidencia/IncidenciaCreate";
import IncidenciaRegistrada from "./pages/Incidencia/IncidenciaRegistrada";
import IncidenciaList from "./pages/Incidencia/IncidenciaList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>la ruta base</p>,
  },
  {
    path: "acceso",
    element: <UsuarioValide />,
  },
  {
    path: "home",
    element: <Layout />,
    children: [
      {
        path: "nuevo-usuario",
        element: <UsuarioCreate />,
      },
      {
        path: "detalle-usuario",
        element: <UsuarioDetalle />,
      },
      {
        path: "usuarios",
        element: <UsuarioList />,
      },
      {
        path: "actualizacion-usuario",
        element: <UsuarioUpdate />,
      },
      {
        path: "nueva-incidencia",
        element: <IncidenciaCreate />,
      },
      {
        path: "registro-incidencia",
        element: <IncidenciaRegistrada />,
      },
      {
        path: "lista-incidencia",
        element: <IncidenciaList />,
      },
    ],
  },
]);

function App() {
  return (
    <ContainerApp>
      {/* <InputV1 name="Correo" placeholder="" />
      <InputV1 name="Contraseña" placeholder="" />
      <ButtonV1 name="Validar" /> */}
      {/* <Layout> */}
      {/* <UsuarioList /> */}
      {/* <UsuarioCreate /> */}
      {/* <UsuarioDetalle /> */}
      {/* </Layout> */}

      <RouterProvider router={router} />
    </ContainerApp>
  );
}

export default App;
