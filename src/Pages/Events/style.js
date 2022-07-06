import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--grey-1);
  img {
    width: 100%;
    height: 100%;
    z-index: 0;
    margin: 0;
    padding: 0;
    display: none;
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
    margin: 25px auto;
  }


  select {
    width: 60%;
    height: 30px;
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

  div {
    z-index: 1;
  }

  .infoProfile {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }

  .profile {
    width: 300px;
    height: 200px;
    background-color: #212529;
    position: relative;
    border-radius: 4px;
  }

  .events {
    width: 300px;
    height: 200px;
    background-color: #212529;
    position: relative;
    border-radius: 4px;
  }

  .bodyEventPage {
    display: flex;
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 680px) {
    form {
      width: 410px;
      height: auto;
    }
    img {
      display: block;
    }
    .entirePage,
    .bodyEventPage,
    .infoProfile {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bodyEventPage {
      right: 0vw;
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
      margin-left: 600px;
    }
  }
`;
