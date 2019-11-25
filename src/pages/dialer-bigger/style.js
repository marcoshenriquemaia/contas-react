import styled, { css } from "styled-components";
import { Button } from "../../components/goals-list/style";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: growUpDialerBigger 150ms;
  position: relative;
  & > ${Button} {
    margin-top: 13%;
  }

  @keyframes growUpDialerBigger {
    from {
      transform: scale(0.1);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const ValueField = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #53ffb9;
  ${({ headerType }) => headerType === "expanse" && css` color: #ff5353;`}
  ${({ headerType }) => headerType === "transfer" && css`color: #53a9ff;`}
`;

export const Currency = styled.span`
  font-weight: 800;
`;

export const Dialer = styled.div`
  width: 31.2vh;
  height: 45%;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  & svg {
    width: 7vh;
    height: 7vh;
    border-radius: 8vh;
    margin: 1.7vh;
    transform: scale(0.6);
    color: #53a9ff;
  }
`;

export const Key = styled.button`
  width: 7vh;
  height: 7vh;
  border-radius: 8vh;
  border: 3px solid #53a9ff;
  margin: 1.7vh;
  outline: none;
  background-color: #fff;
  font-size: 2em;
  color: #53a9ff;
  :hover {
    background-color: #53a9ff;
    color: #fff;
  }
`;
