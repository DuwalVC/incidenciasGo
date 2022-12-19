import React from "react";
import { SCTable, ContainerTable } from "./styles";

function TableV1({ head, body, containerWidth, tableWidth }) {
  return (
    <ContainerTable containerWidth={containerWidth}>
      <SCTable tableWidth={tableWidth}>
        <thead>
          <tr>{head}</tr>
        </thead>
        <tbody>{body}</tbody>
      </SCTable>
    </ContainerTable>
  );
}

export default TableV1;
