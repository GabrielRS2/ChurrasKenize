import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 155px;
  .headerCardDetail {
    display: flex;
    justify-content: flex-end;
    gap: 45%;
    width: 100%;
    button {
      background: none;
      color: var(--white);
    }
  }

  .mainCardDetail {
    display: flex;
    justify-content: flex-start;
  }

  @media screen and (max-width: 666px) {
    height: 322px;
  }

  @media screen and (max-width: 768px) {
    height: 183px;
  }
`;
