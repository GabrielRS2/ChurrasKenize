import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 315px;
  max-width: 300px;
  height: auto;
  background-color: #212529;
  border-radius: 6px;
  padding: 20px;

  .validationLogin {
    background-color: #212529;
    padding: 20px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    color: white;
  }

  .validationButtons {
    display: flex;
    justify-content: space-between;

    button {
      padding: 0 25px;
      height: 50px;
      border-radius: 6px;

      transition: 400ms;
      &:hover {
        filter: brightness(75%);
      }
    }
  }
`;
