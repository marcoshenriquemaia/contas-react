import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 82.936%;
  height: 32%;
  border: 1px solid #53A9FF69;
  border-radius: 9px;
  background-color: #fff;
  padding: 1em;
  transform: translateY(-1.3em);
  margin-top: 18px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.2em;
  margin: 0.3em;
  color: #53a9ff;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 10rem;
  min-height: 3rem;
  border: none;
  border-radius: 1.5rem;
  color: #fff;
  font-size: 1.1em;
  background-color: #53a9ff;
  outline: none;
  align-self: center;
  margin-bottom: 1em;
  &:hover {
    background-color: #70aaff;
  }
`;
