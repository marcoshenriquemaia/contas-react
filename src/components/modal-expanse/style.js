import styled from 'styled-components'
import { Currency } from '../../pages/dialer-bigger/style'
import { Button } from '../goals-list/style'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 15;
  background-color: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  & ${Button}{
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const ContainerWallet = styled.div`
  width: 95%;
  height: 88%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

`

export const ValueField = styled.div`
  width: 50%;
  height: 2em;
  background-color: #53A9FF61;
  border-radius: 9px;
  margin-top: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  & ${Currency} {
    color: #53A9FF;
  }
`
export const Value = styled.span`
  margin-left: 5px;
  color: #707070;
`

export const WrapperWallet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const TitleWallet = styled.h2`
  color: #53A9FF;
  font-size: 1.6em;
  font-weight: 800;
`

export const Date = styled.input`
  width: 60%;
  height: 2.7rem;
  border-radius: 31px;
  border: 1px solid #53A9FF99;
  font-size: 1.5em;
  color: #707070;
  text-align: center;
  outline: none;
`
export const Obs = styled.textarea`
  width: 100%;
  height: 25%;
  border: 1px solid #53A9FF91;
  border-radius: 9px;
  outline: none;
  padding: 5px;
  box-sizing: border-box;
`