import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 5;
  background-color: #53a9ff4a;
`;

export const BoxModal = styled.div`
  transform: translateY(calc(28.87% - 1.6em));
  border: 1px solid #53a9ff69;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90.53%;
  height: 70.6%;
  padding: 9px;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 3px 6px #00000029;
`;

export const NameField = styled.input.attrs(() => ({type: "text", placeholder: 'Nome da Meta'}))`
  width: 94%;
  height: 35px;
  border-radius: 31px;
  border: 1px solid #53A9FF;
  margin-top: 1.5em;
  outline: none;
  padding-left: 1.5em;
  ::placeholder{
    color: #53A9FF;
  }
`

export const FinishGoalWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1.5em;
  width: 90%;
  height: 2em;
`

export const TitleFinishGoal = styled.h2`
  color: #53A9FF;
`
export const DateField = styled.input.attrs(() => ({type: "date"}))`
  border: 1px solid #53A9FF;
  border-radius: 31px;
  text-align: center;
  color: #53A9FF;
  width: 145px;
  height: 35px;
`