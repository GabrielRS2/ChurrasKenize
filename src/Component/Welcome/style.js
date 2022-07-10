import styled from "styled-components";

const grey4 = "#1A1A1A";
const grey5 = "rgba(26, 26, 26, 0.75)";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  background: ${grey4};

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: ${grey4};

    img {
      width: 50%;
      height: 50%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 50%;

    background: ${grey5};

    h1 {
      color: var(--white);
      width: 50%;
      font-size: 25px;
    }

    p {
      color: var(--white);
      width: 50%;
      font-size: 20px;
    }

    button {
      border: 1px solid var(--white);
      width: 50%;
      font-size: 18px;
      padding: 10px;
      background-color: transparent;
    }

    button:hover {
      transition: all ease-in-out 0.3s;
      background-color: var(--red-1);
    }

    a {
      color: var(--white);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    height: 100vh;
    background: ${grey4};

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: ${grey4};

    img {
      width: 70%;
      height: 70%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 70%;

    background: ${grey5};

    h1 {
      color: var(--white);
      width: 63%;
      font-size: 25px;
    }

    p {
      color: var(--white);
      width: 63%;
      font-size: 20px;
    }

    button {
      border: 1px solid var(--white);
      width: 63%;
      font-size: 18px;
      padding: 10px;
      background-color: transparent;
    }

    button:hover {
      transition: all ease-in-out 0.3s;
      background-color: var(--red-1);
    }

    a {
      color: var(--white);
    }
  }
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 20px;
    
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 20%;

      img {
        width: 120%;
        height: 120%;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 20px;
      width: 70%;
      height: 20%;

      h1 {
        color: var(--white);
        width: 100%;
        font-size: 20px;
      }

      p {
        color: var(--white);
        width: 100%;
        font-size: 20px;
      }

      button {
        border: 1px solid var(--white);
        width: 88%;
        font-size: 15px;
        padding: 10px;
        background-color: transparent;
      }

      button:hover {
        transition: all ease-in-out 0.3s;
        background-color: var(--red-1);
      }

      a {
        color: var(--white);
      }
    }
  }
`;
