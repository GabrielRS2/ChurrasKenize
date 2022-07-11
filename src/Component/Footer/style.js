import styled from "styled-components";

export const Container = styled.div`
    width: auto 100%;
    height: 70px;
    background-color: #212529;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    
    button{
        width: 35px;
        height: 35px;
        font-size: 11px;
    }

    button:hover{
        color: var(--red-1);
    }

    @media (max-width: 375px){
        display: flex;
        
        .active{
            display: none;
        }
    }
`
