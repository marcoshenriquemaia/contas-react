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
  animation-name: open;
  animation-duration: 250ms;

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const BoxModal = styled.div`
  transform: translateY(calc(28.87% - 1.6em));
  border: 1px solid #53a9ff69;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 90.53%;
  height: 70.6%;
  padding: 9px;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 3px 6px #00000029;
  animation-name: growUp;
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(1.000, 0.310, 0.360, 1.6);

  @keyframes growUp {
    from {
      transform: scale(0) translateY(calc(28.87% - 1.6em));
    }
    to {
      transform: scale(1) translateY(calc(28.87% - 1.6em));
    }
  }
`;

export const NameField = styled.input`
  width: 93%;
  height: 35px;
  border-radius: 31px;
  border: 1px solid #53a9ff;
  margin-top: 1.5em;
  outline: none;
  padding-left: 1.5em;
  ::placeholder {
    color: #53a9ff;
  }
`;

export const FinishGoalWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1.5em;
  width: 90%;
  height: 2em;
`;

export const TitleFinishGoal = styled.h2`
  color: #53a9ff;
`;
export const DateField = styled.input`
  border: 1px solid #53a9ff;
  border-radius: 31px;
  text-align: center;
  color: #53a9ff;
  width: 145px;
  height: 35px;
`;
