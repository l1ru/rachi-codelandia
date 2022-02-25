import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #FFF;
        --white-400: #effbff;
        --gray: #6e7275;
        --white-200: #eff8ff;
        --gray-light: #dbdbdb;
        --gray-200: #293145;
        --blue: #0F9AFE;
        --inter: "Inter", sans-serif;
        --sora: "Sora", sans-serif;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyles