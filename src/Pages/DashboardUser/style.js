import styled from "styled-components";

const red3 = '#810C0C';

export const Container = styled.div`
  background-color: ${red3};
  display: flex;
  justify-content: center;
  padding: 20px;
  font-family: "Poppins", sans-serif;

  .wrapper {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--grey-3);
    width: 75%;
    border-radius: 5px;
    padding: 20px;
  }

  .header__dashboard {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;
    gap:20px;
  }

  .header__filter {
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
      color: var(--white);
    }

    button {
      background: var(--red-2);
      color: var(--white);
      width: 150px;
      padding: 10px;
      border-radius: 15px;
      font-weight: bold;
      font-size: 18px;
    }
  }

  .header__search {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .icon {
      width: 40px;
      height: 40px;
      color: var(--white);
      cursor: pointer;
    }

    input {
      width: 210px;
      padding: 10px;
      color: white;
    }
  }

   @media (max-width: 425px){
    .wrapper{
      display: flex;
      width: 90%;
    }

    .header__filter{
      display: none;
    }

    .header__search {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0px;

    .icon {
      width: 40px;
      height: 40px;
      color: var(--white);
      cursor: pointer;
    }

    input {
      width: 230px;
      padding: 10px;
    }
  }
  }

  @media (max-width: 375px){
    .wrapper{
      display: flex;
      width: 90%;
    }

    .header__filter{
      display: none;
    }

    .header__search {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0px;

    .icon {
      width: 40px;
      height: 40px;
      color: var(--white);
      cursor: pointer;
    }

    input {
      width: 230px;
      padding: 10px;
    }
  }
  }


`;
