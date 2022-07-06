import styled from "styled-components";

export const Container = styled.div`
  header {
    background-color: var(--grey-3);
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;

    img {
      width: 140px;
      height: 140px;
    }

    nav {
    }

    ul {
      display: flex;
      gap: 20px;
    }

    li {
    }

    button {
      width: 150px;
      font-size: 18px;
      padding: 10px;
      background-color: var(--grey-4);
    }

    button:hover {
      transition: all ease-in-out 0.3s;
      background-color: var(--red-1);
    }

    .link {
      color: var(--white);
    }
  }
`;
