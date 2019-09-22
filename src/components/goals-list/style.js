import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 82%;
  height: 40%;
  border: 1px solid #53a9ff;
  border-radius: 0.5em;
  background-color: #fff;
  overflow-y: scroll;
  padding: 1em;
  transform: translateY(-1.3em);
  margin-top: 2em;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.2em;
  margin: 0.3em;
  color: #53a9ff;
`;

export const List = styled.ul`
  width: 100%;
  height: 60%;
  overflow-y: scroll;
`;

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  border: none;
  border-radius: 1.5rem;
  color: #fff;
  font-size: 1.1em;
  background-color: #53a9ff;
  outline: none;
  &:hover {
    background-color: #70aaff;
  }
`;
