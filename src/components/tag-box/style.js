import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 2em;
  border: 1px solid #53A9FF8F;
  border-radius: 9px;
  padding: 2px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`

export const ButtonAdd = styled.button`
  background-color: #fff;
  border: 1px solid #53A9FF8F;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #53A9FF;
  right: 2px;
  height: calc(100% - 5px);
  outline: none;
  position: sticky;
`

export const Text = styled.span`
  margin-right: 5px;
  font-size: 1.2em;
`

export const Input = styled.input`
  width: fit-content;
  height: 100%;
  border: 1px solid black;
`