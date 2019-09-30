import styled from 'styled-components'

export const Container = styled.div`
  width: 95%;
  height: 2em;
  border: 1px solid #53A9FF8F;
  border-radius: 9px;
  padding: 2px;
  box-sizing: border-box; 
  display: flex;
  overflow-x: scroll;
  position: relative;
`

export const ButtonAdd = styled.button`
  border: none;
  background-color: #fff;
  border: 1px solid #53A9FF8F;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #53A9FF;
  position: absolute;
  right: 5px;
  height: calc(100% - 5px);
  outline: none;
`

export const Text = styled.span`
  margin-right: 5px;
  font-size: 1.2em;
`