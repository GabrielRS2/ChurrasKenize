import styled from "styled-components";

const grey5 = "#797979";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;

  .card__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
    margin-top: 20px;
    height: 720px;
    overflow-y: scroll;
  }

  .card {
    width: 250px;
    height: 340px;
    border: 1px solid white;
    padding: 20px;
    background-color: var(--grey-2);
    border-radius: 5px;

    .card__info {
      display: flex;
      justify-content: center;
      color: var(--white);
      gap: 10px;

      img {
        width: 60px;
        height: 60px;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        p {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }

    .card__combo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 10px;

      h2 {
        color: var(--white);
        text-align: center;
        font-size: 20px;
      }

      img {
        width: 200px;
      }
    }
  }

  .card__button {
    display: flex;
    gap: 20px;

    margin-top: 10px;
    .active {
      background-color: var(--grey-3);
      border-radius: 5px;
      color: var(--white);
    }

    button {
      width: 190px;
      height: 30px;
      color: ${grey5};
      background-color: var(--grey-1);
      border-radius: 5px;
      font-size: 12px;
    }
  }

  @media (max-width: 375px) {
    .card__container {
      display: flex;
      justify-content: unset;
      overflow-x: scroll;
      flex-wrap: unset;
      height: 300px;
      gap: 20px;
    }

    .card {
      width: 210px;
      height: 300px;
      border: 1px solid white;
      padding: 20px;
      background-color: var(--grey-2);
      border-radius: 5px;

      .card__info {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        width: 110%;

        img {
          width: 60px;
          height: 60px;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 10px;

          p {
            font-size: 10px;
          }
        }
      }

      .card__combo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 10px;

        h2 {
          color: var(--white);
          text-align: center;
          font-size: 12px;
        }

        img {
          width: 170px;
        }
      }
    }

    .card__button {
      display: flex;
      margin-top: 10px;

      .active {
        background-color: var(--grey-3);
        border-radius: 5px;
        color: var(--white);
      }

      button {
        width: 260px;
        height: 25px;
        color: ${grey5};
        background-color: var(--grey-1);
        border-radius: 5px;
        font-size: 10px;
      }
    }
  }
`;
