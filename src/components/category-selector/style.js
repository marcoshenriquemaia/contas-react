import styled, { css } from "styled-components";

export const Container = styled.div`
  width: calc(100% - 18px);
  height: 4em;
  background-color: #d2e4fa;
  display: flex;
  border-radius: 9px;
  align-items: center;
  justify-content: space-around;
  animation: shrink 150ms;
  position: absolute;
  top: 9px;
  background-color: #d2e4fa;
  z-index: 15;

  @keyframes shrink {
    from {
      height: calc(100% - 18px);
    }
    to {
      height: 4.563em;
    }
  }

  ${({ selecting }) =>
    selecting &&
    css`
      width: calc(100% - 18px);
      position: absolute;
      background-color: #d2e4fa;
      z-index: 15;
      animation: growUp 150ms forwards;
      background-color: #fff;
      align-items: baseline;
      flex-direction: column;
      justify-content: flex-start;

      @keyframes growUp {
        from {
          height: 4.563em;
        }
        to {
          height: calc(100% - 18px);
        }
      }
    `}
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
