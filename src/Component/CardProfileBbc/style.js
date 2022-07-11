import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-weight: 600;
  padding: 10px 0;
  }

  .left_info figure {
    border: 2px solid var(--grey-4);
    border-radius: 15px;
    text-align: center;
    width: 100px;
    height: 100px;
    margin: 0;
  }

  .right_info {
    text-align: left;
  }
  .right_info p {
    margin 5px 0;
  }

  .edit_profile_button {
    padding: 5px 10px;
    font-weight: 600;
    color: var(--white);
    border-radius: 15px;
    background-color: var(--red-1);
`;
