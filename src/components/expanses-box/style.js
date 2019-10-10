import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 82.937%;
  height: 51.43%;
  min-height: 51.43%;
  border: 1px solid #53a9ff69;
  border-radius: 9px;
  background-color: #fff;
  overflow-y: scroll;
  padding: 1em;
  padding-top: 2.2em;
  margin-bottom: 1em;
  margin-top: 1em;
  position: relative;
`

export const DateText = styled.span`
  color: #707070;
  font-weight: 800;
  position: fixed;
  transform: translateY(-100%);
`

