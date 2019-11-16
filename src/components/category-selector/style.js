import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4em;
  max-height: 70.6vh;
  z-index: 15;
  background-color: #fff;
  position: absolute;
  & > :first-child {
    margin-bottom: 0;
  }

  ${({ selecting }) =>
    selecting &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: scroll;
      ${({itemAmount}) => css` height: ${itemAmount * 5}em;`}
      max-height: 70.6vh;
      z-index: 20;
      & > :first-child {
        margin-bottom: 1em;
      }
    `}
`;

export const WapperSelector = styled.div`
  width: 100%;
  height: 4em;
  position: relative;
`;

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
