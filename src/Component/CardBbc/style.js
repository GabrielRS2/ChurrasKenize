import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .combo-list {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  tbody .item {
    background-color: var(--grey-2);
    box-sizing: content-box;
    margin: 5px;
    border: solid var(--grey-3);
    border-right: 5px;
    border-left: 5px;
  }
  .item td {
    padding: 5px 1px;
  }

  img {
    max-width: 100px;
    max-height: 100px;
  }
`;
