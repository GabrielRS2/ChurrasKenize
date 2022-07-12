import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-2);
  height: fit-content;
  width: 90%;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 10px;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const TitleAndImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: 25%;

  img {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 500px) {
    width: 60%;

    img {
      width: 170px;
      height: 170px;
    }
  }
`;
