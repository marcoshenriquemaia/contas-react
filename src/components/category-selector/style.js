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
      height: fit-content;
      animation-name: openCategorySelector;
      animation-duration: 250ms;
      animation-fill-mode: forwards;
      max-height: fit-content;
      z-index: 20;

      ${({ type }) =>
        type === "wallet" &&
        css`
          max-height: 70.6vh;
          @keyframes openCategorySelector {
            from {
              height: 4em;
            }
            to {
              height: 70.6vh;
            }
          }
        `}
        ${({ type }) =>
        type === "category" &&
        css`
          max-height: calc(70.6vh - 5em);
          @keyframes openCategorySelector {
            from {
              height: 4em;
            }
            to {
              height: calc(70.6vh - 5em);
            }
          }
        `}
        ${({ type }) =>
        type === "goal" &&
        css`
          max-height: 70.6vh;
          @keyframes openCategorySelector {
            from {
              height: 4em;
            }
            to {
              height: 70.6vh;
            }
          }
        `}
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
