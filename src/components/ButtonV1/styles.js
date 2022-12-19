import styled from "styled-components";

export const SCButton = styled.button`
  height: 44px;
  width: 100%;
  max-width: 600px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;

  background: #0d99ff;
  border-radius: 10px;
  border: 0;

  padding: 0 20px;

  :hover {
    background: #0973c0;
    cursor: pointer;
  }

  :active {
    background: #055188;
  }
`;
