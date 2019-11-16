import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.7em;
  margin-bottom: 0.7em;
`;

export const Title = styled.h1`
  font-weight: 700;
  color: #707070;
  font-size: 1.1em;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  &:hover > ${Title} {
    color: #0099ff;
  }
`;

export const Bar = styled.div`
  margin-left: 5px;
  width: 10em;
  height: 0.6em;
  border: 1px solid #53a9ff;
  border-radius: 5px;
`;

export const ProgressBar = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 1em;
  background-image: linear-gradient(to right, #53a9ff, #328de8);
`;
