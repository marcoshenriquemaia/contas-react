import styled from 'styled-components'
import { FaHome } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 7%;
  box-shadow: 0px -12px 6px rgba(0,0,0,.07);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 100%;
  & > a{
    color: #53A9FF;
  }
`
export const Icon = styled(FaHome)`
  width: 2em;
  height: 2em;
`