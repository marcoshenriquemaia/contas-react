import styled from "styled-components";
import { FaHome, FaFileInvoiceDollar } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;
  justify-content: space-evenly;
  width: 100%;
  height: 6.562%;
  box-shadow: 0px -12px 6px rgba(0, 0, 0, 0.07);
  z-index: 50;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 100%;
  & > a {
    color: #53a9ff;
  }
`;
export const Icon = styled(FaHome)`
  width: 2em;
  height: 2em;
`;
export const IconExpanse = styled(FaFileInvoiceDollar)`
  width: 2em;
  height: 2em;
`;
