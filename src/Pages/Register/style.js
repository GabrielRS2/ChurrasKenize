import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromright = keyframes`
from {
    opacity: 0;
    transform: translateX(50px);
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`;

const rotate90deg = keyframes`
from {
    opacity: 0;
    transform: rotate3d(0, 1, 0, 90deg);
}

to{
    opacity: 1;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  form {
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 296px;
    height: auto;
    background-color: #000000;
    border-radius: 6px;
    animation: ${appearFromright} 2s;
    width: 90%;
    padding: 20px;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .background {
    background-color: #212529;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 20px;
  }

  p {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 22px;
  }

  a,
  label {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 11px;
  }

  select {
    width: 90%;
    height: 30px;
    margin-bottom: 15px;
  }

  .loginImage {
    display: none;
  }

  .logoImage {
    animation: ${rotate90deg} 3s;
  }

  .error {
    color: red;
  }

  button {
    width: 90%;
    height: 48px;
    background-color: #ff0909;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-size: 11px;
    color: white;
  }

  a {
    width: 90%;
    height: 48px;
    background-color: #868e96;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: white;
  }

  span {
    font-family: "Poppins", sans-serif;
    font-size: 11px;
    color: white;
  }

  @media screen and (min-width: 680px) {
    .loginImage {
      width: 50vw;
      display: block;
    }
    form {
      width: 369px;
      height: auto;
    }
    .background {
      width: 50vw;
    }
  }
`;
