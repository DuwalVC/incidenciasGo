import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const ContainerBody = styled.div`
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const ModuleTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;

  margin: 0;

  color: #000000;
`;
