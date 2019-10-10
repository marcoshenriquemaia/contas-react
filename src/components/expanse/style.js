import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 35%;
  height: 90%;
`;

export const Principal = styled.h1`
  color: #707070;
  font-weight: bold;
`

export const Sub = styled.h2`
  color: #707070;  
`

export const Status = styled.h2`
  color: #707070;  
  font-size: .8em;
`

export const WrapperValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 35%;
  height: 90%;
`;