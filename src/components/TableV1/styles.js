import styled from "styled-components";

export const ContainerTable = styled.div`
  width: ${(props) => props.containerWidth ?? "100%"};
  overflow: auto;
`;

export const SCTable = styled.table`
  width: ${(props) => props.tableWidth ?? "max-content"};
  table-layout: fixed;
  border-spacing: 0;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  /* identical to box height */

  color: #000000;

  thead {
    tr {
      :first-child {
        height: 40px;
      }
    }
  }

  tbody {
    background: #f5f5f5;

    tr {
      :hover {
        background: #d8eeff;
      }
    }
  }

  tr {
    height: 50px;
  }

  th {
    text-align: start;
    border-bottom: 1px solid #cccccc;
    padding-left: 10px;

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }

  td {
    text-align: start;
    border-bottom: 1px solid #cccccc;
    padding-left: 10px;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
`;
