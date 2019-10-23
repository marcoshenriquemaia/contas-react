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
  max-height: 78%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  transform: translateY(-2.3em);
`

export const TextDate = styled.span`
  position: fixed;
  color: #707070;
  font-weight: bold;
`