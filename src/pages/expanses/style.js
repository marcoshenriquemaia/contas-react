import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const ContainerExpanses = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  transform: translateY(-2.3em);
`

export const ExpansesBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 82.937%;
  min-height: 51.43%;
  border: 1px solid #53a9ff69;
  border-radius: 9px;
  background-color: #fff;
  overflow-y: scroll;
  padding: 1em;
  margin-bottom: 1em;
  margin-top: 1em;
`