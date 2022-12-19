import styled from "styled-components";

export const ContainerGestorDatos = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: ${(props) => props.width ?? "fit-content"};
  max-width: ${(props) => props.maxWidth ?? "none"};
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin: 0;

  color: #000000;
`;

export const SCHeader = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const ContainerActions = styled.div`
  display: flex;
  gap: 10px;
`;
