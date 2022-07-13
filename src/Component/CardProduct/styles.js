import styled from "styled-components";

export const Container = styled.div`

    .cardDetail {
        display: flex;
        flex-direction: column;
        gap: .5rem; 
    }

    .comboName {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 200px;
    }
    

@media (max-width: 375px){
    .cardDetail{
        width: 210px;
    }

    .comboName {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 180px;
    }

}
`
export const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };