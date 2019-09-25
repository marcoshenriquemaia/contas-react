import styled from "styled-components";
import { Button } from '../goals-list/style'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  & ${Button} {
    margin-top: 13%;
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
  color: #53FFB9;
`;

export const Currency = styled.span`
  font-weight: 800;
`

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
  :hover{
    background-color: #53a9ff;
    color: #fff;
  }
`;
