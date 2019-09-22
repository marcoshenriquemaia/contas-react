import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 3em;
  height: 3em;
  background-image: linear-gradient(180deg, #53a9ff, #328de8);
  border-radius: 100em;
  ${({ cor }) => cor == 'red' && css`background-image: linear-gradient(180deg, #FF5353, #DE5959);`};
  ${({ cor }) => cor == 'purple' && css`background-image: linear-gradient(180deg, #8053FF, #6F49DB);`};
  
  ${({ active }) =>
    !!active &&
    css`
      width: 6em;
      height: 6em;
    `}
`;
