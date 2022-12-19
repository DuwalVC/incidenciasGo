import React from "react";
import { Outlet } from "react-router-dom";
import Navegation from "../Navegation";
import { ContainerLayout, ContainerModule } from "./styles";

function Layout({ children }) {
  return (
    <ContainerLayout>
      <Navegation />
      <ContainerModule>
        <Outlet />
      </ContainerModule>
    </ContainerLayout>
  );
}

export default Layout;
