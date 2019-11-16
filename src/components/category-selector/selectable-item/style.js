import styled, { css} from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4em;
  display: flex;
  border-radius: 9px;
  align-items: center;
  background-color: #d2e4fa;
  z-index: 15;
  box-sizing: border-box;
  margin-bottom: 1em;
  padding: 0 8px;
  animation-name: entry;
  animation-duration: 250ms;
  animation-fill-mode: backwards;

  ${({delay}) => css`animation-delay: ${delay}ms`}

  @keyframes entry {
    from{
      transform: translatex(-100%);
    }to{
      transform: translatex(0);
    }
  }
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
  margin-bottom: 5px;
  color: #707070;
`;
export const SubTitle = styled.h2`
  color: #707070;
`;
