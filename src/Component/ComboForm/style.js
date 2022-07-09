import styled from "styled-components";

export const Container = styled.div`
  form {
    padding: 15px;
    padding-top: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  .meta-container {
    font-size: 14px;
  }

  .meta-container span {
    color: lightcoral;
  }

  input {
    display: block;
    background-color: var(--white);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
    padding: 10px;
    color: var(--white);
    background-color: var(--grey-2);
    font-weight: 600;
  }
`;
