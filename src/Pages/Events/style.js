import styled from "styled-components";

export const ContainerEvent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px 20px;

  background-color: #810C0C;
  font-family: "Poppins";
  
  .bodyEventPage {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }

  form {
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 300px;
    height: auto;
    background-color: #212529;
    border-radius: 6px;
    padding: 20px;
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
  
  select {
    width: 60%;
    height: 30px;
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
  }
  
  .events {
    width: 100%;
    max-width: 300px;
    height: 200px;
    background-color: #212529;
    border-radius: 4px;
  }
  
  @media(min-width: 680px) {

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