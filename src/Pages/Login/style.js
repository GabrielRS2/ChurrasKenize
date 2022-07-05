import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromleft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`

const rotate90deg = keyframes`
from {
    opacity: 0;
    transform: rotate3d(0, 1, 0, 90deg);
}

to{
    opacity: 1;
}
`

export const Container = styled.div`
display: flex;
justify-content: space-between;

form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 296px;
    height: 402px;
    background-color: #000000;
    border-radius: 6px;
    animation: ${appearFromleft} 2s;
    width: 90%;
}

label{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
div{
    background-color: #212529;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 20px;
}

p{
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
}

a,label{
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
}

input{
    width: 90%;
    height: 30px;
}

.loginImage{
    display: none;
}

.logoImage{
    animation: ${rotate90deg} 3s;
}

.error{
    color: red;
    input{
        outline-color: red;
    }
}

button{
    width: 90%;
    height: 48px;
    background-color: #FF0909 ;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 11px;
    color: white;
}

a{
    width: 90%;
    height: 48px;
    background-color: #868E96;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: white;
}


span{
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    color: white;
}

@media screen and (min-width: 680px) {
    .loginImage{
        width: 50vw;
        display: block;
    }
    form{
    width: 369px;
    height: 502px;
}   
    div{
        width: 50vw;
    }
  }

`
