import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');

*{
    box-sizing: border-box;
}

body {
    margin:0;
    font-family='Inter';
}

p{
    line-height:1.5em;
}

`;

export default GlobalStyle;
