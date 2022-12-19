import styled from "styled-components";

export const ContainerInput = styled.div`
  width: ${(props) => props.width ?? "100%"};
  max-width: ${(props) => props.maxWidth ?? "600px"};
  /* background: blue; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SCLabel = styled.label`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export const SCInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0 10px;

  :focus-visible {
    outline: 0;
  }
`;
