import styled from "styled-components";

export const Container = styled.div`
  width: 100wv;
  min-height: 100vh;
  background-color: var(--red-2);

  h2 {
    font-size: 16px;
    margin-bottom: 24px;
  }

  .wrapper {
    color: var(--white);
    display: flex;
    padding: 15px 25px;
  }

  .wrapper main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .bbc_cards_container {
    background: var(--grey-3);
    padding: 10px 15px;
    border-radius: 15px;
    text-align: center;
    margin-bottom: 15px;
    max-width: 1250px;
  }

  @media (max-width: 680px) {
    .wrapper {
      flex-direction: column;
    }
  }

  @media (min-width: 680px) {
    wrapper {
      justify-content: space-between;
    }
    .combo_lists,
    .bbc_user_info {
      margin: 0 15px;
    }
    .combo-lists {
      width: 50%;
    }
    .bbc_user_info {
      width: 45%;
      min-width: 250px;
      max-width: 600px;
    }
  }
`;
