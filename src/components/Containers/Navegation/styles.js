import styled from "styled-components";

export const ContainerNavegation = styled.div`
  width: 240px;
  height: 100%;
`;

export const SCh1 = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  color: #000000;

  height: 80px;
  margin: 0;

  display: flex;
  align-items: center;
  margin: 0 40px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 160px);
  /* background-color: green; */
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  /* background-color: blue; */
`;
