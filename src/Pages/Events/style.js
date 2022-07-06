import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #212529;
img{
    width: 100%;
    height: 100%;
    z-index: 0;
    margin: 0;
    padding: 0;
    display: none;
}

form{
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 296px;
    height: auto;
    background-color: #212529;
    border-radius: 6px;
    width: 369px;
    padding: 20px;
}

button{
    width: 60%;
    height: 48px;
    background-color: #FF0909 ;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 11px;
    color: white;
}

select{
    width:60%;
    height: 30px;
}

input{
    width: 60%;
    height: 30px;
    margin-bottom: 15px;
    border-radius: 4px;
    outline: none;
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

div{
    z-index: 1;
}

.profile{
    width: 369px;
    height: 233px;
    background-color: #212529;
    position: relative;
    border-radius: 4px;
}

.events{
    width: 369px;
    height: 233px;
    background-color: #212529;
    position: relative;
    border-radius: 4px;
}

.bodyEventPage{
    display: flex;
    flex-direction: row-reverse;
}



@media screen and (min-width: 680px) {
    form{
    width: 410px;
    height: auto;
    }   
    img{
    display: block;
    }
    div{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bodyEventPage{
        right: 0vw;
    }

    .profile{
        margin-bottom: 60px;
        width: 400px;
    }
    .events{
        width: 400px;
    }

    .infoProfile{
    display: flex;
    flex-direction: column;
    margin-left: 600px;
}
  }
`
