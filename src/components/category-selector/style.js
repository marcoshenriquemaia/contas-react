import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4em;
  z-index: 15;
  background-color: #fff;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.315, 1.070, 0.865, 1.320);
  position: absolute;
  & > :first-child {
    margin-bottom: 0;
  }

  ${({ selecting }) =>
    selecting &&
    css`
      height: calc(70.6vh);
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: scroll;
      & > :first-child {
        margin-bottom: 1em;
      }
    `}
`;

export const WapperSelector = styled.div`
  width: 100%;
  height: 4em;
  position: relative;
`

export const WrapperCategory = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2em;
`;

export const TitleCategory = styled.h1`
  font-weight: 700;
  color: #707070;
`;
export const SubTitleCategory = styled.h2`
  color: #707070;
`;
