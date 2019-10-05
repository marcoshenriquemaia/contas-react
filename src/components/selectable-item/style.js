import styled from "styled-components";

export const Container = styled.div`
  width: calc(100%);
  height: 4em;
  display: flex;
  border-radius: 9px;
  align-items: center;
  animation: shrink 150ms;
  background-color: #d2e4fa;
  z-index: 15;
  box-sizing: border-box;
  margin-bottom: 1em;
  padding: 0 8px;
  box-sizing: border-box;
`;

export const WrapperText = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const Title = styled.h1`
  font-weight: 700;
  color: #707070;
`;
export const SubTitle = styled.h2`
  color: #707070;
`;
