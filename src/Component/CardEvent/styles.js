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

  .deleteIcon {
    margin: 5px 20px;
    background-color: transparent;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    flex-direction: row;
  }
`;
export const TitleAndImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: fit-content;
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

export const OtherInfos = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    flex-direction: column;
    gap: 15px;
    text-align: flex-start;
    margin-left: 25px;

    .infoTitle {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 5px;
    div {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
`;
