import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 100vw;
  height: 1200px;

  img {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    margin: 0;
    padding: 0;
  }

  .img1 {
    display: none;
  }

  .img2 {
    display: block;
  }

  form {
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: auto;
    background-color: #212529;
    border-radius: 6px;
    /* width: 369px; */
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
  
  /* div {
    z-index: 1;
  } */
  
  .infoProfile {
    gap: 15px;
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    justify-content: center;
    align-items: center;
  }

  .profile {
    width: 300px;
    height: 200px;
    background-color: #212529;
    /* position: relative; */
    border-radius: 4px;
  }
  
  .events {
    width: 300px;
    height: 200px;
    background-color: #212529;
    /* position: relative; */
    border-radius: 4px;
  }
  
  .bodyEventPage {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  .entirePage {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 16px 20px;
    gap: 16px;
  }
  
  @media(min-width: 680px) {

    height: auto;

    .entirePage {
      flex-direction: row;
      padding: 20px 20px 16px 20px;
      align-items: flex-start;
      gap: 48px;
    }
    
    .openModal {
      display: none;
    }
  
    form {
      width: 410px;
      height: auto;
      display: flex;
    }
  
    .img1 {
      display: block;
    }

    .img2 {
      display: none;
    }
    
    .bodyEventPage {
      right: 0vw;
      /* position: absolute; */
    }
    
    .profile {
      margin-bottom: 60px;
      width: 400px;
    }
    .events {
      width: 400px;
    }
    
    .infoProfile {
      display: flex;
      flex-direction: column;
    }
  }
  `;