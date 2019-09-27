import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.88vh;
  display: flex;
`;

export const Revenue = styled.div`
  width: 30%;
  height: 100%;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: linear-gradient(to top, #53a9ff, #328de8);
  ${({ headerType }) =>
    headerType == "revenue" &&
    css`
      background-image: linear-gradient(to top, #53a9ff99, #328de899);
    `}
`;
export const Expanse = styled.div`
  width: 30%;
  height: 100%;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: linear-gradient(to top, #53a9ff, #328de8);
  ${({ headerType }) =>
    headerType == "expanse" &&
    css`
      background-image: linear-gradient(to top, #53a9ff99, #328de899);
    `}
`;

export const Transfer = styled.div`
  width: 40%;
  height: 100%;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: linear-gradient(to top, #53a9ff, #328de8);
  ${({ headerType }) =>
    headerType == "transfer" &&
    css`
      background-image: linear-gradient(to top, #53a9ff99, #328de899);
    `}
`;
