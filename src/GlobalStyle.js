import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin:0 ;
    padding: 0;
    box-sizing: border-box ;
    font-family: 'Work Sans', sans-serif;
    ::-webkit-scrollbar{
    display: none;
}
    @media screen and (max-width: 425px) {
        background-color:#ebe8fb ;
    }

   
}
`;

export default GlobalStyle;
