import styled from "styled-components";

export const ContainerEvent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px 20px;

  background-color: #810c0c;
  font-family: "Poppins";

  .bodyEventPage {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }

  button {
    width: 60%;
    height: 48px;
    background-color: #ff0909;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-size: 11px;
    color: white;
  }

  p {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }

  a,
  label {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 11px;
  }

  .infoProfile {
    width: 100%;
    max-width: 300px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile {
    width: 100%;
    max-width: 300px;
    height: 200px;
    background-color: #212529;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h3{
      font-family: 14px;
      color: white;
    }
    p{
      font-size: 11px;
    }
    img{
      width: 101px;
      height: 101px;
      border-radius: 4px;
    }

    button{
      width: 70px;
      height: 20px;
    }

    .profileInfo{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
    }
  }

  .events {
    width: 100%;
    max-width: 300px;
    height: 200px;
    background-color: #212529;
    border-radius: 4px;
  }

  @media (min-width: 680px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    height: 100%;
    max-height: 100vh;

    .bodyEventPage {
      width: auto;
    }

    .openModal {
      display: none;
    }

    form {
      width: 410px;
      height: auto;
      display: flex;
    }

    .profile {
      margin-bottom: 60px;
      width: 400px;
    }

    .events {
      width: 400px;
    }

    .infoProfile {
      justify-content: flex-start;
    }
  }
`;
