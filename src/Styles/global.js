import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Lato";
  }
  
   html{
      scroll-behavior: smooth;
    }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

    ::-webkit-scrollbar {
      width: 20px;
      background-color: var(--grey-3);;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--white);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--white);
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: var(--white);
    }

  :root {
    --grey-1: #D9D9D9;
    --grey-2: #868E96;
    --grey-3: #212529;
    --grey-4: #000000;
    --red-1: #FF0909;
    --red-2: #C73B3B;
    --white: #F8F9FA;
  }
`;
