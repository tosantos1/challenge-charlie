import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;

        --blue-200: #90CDF4;
        --blue-500: #3182CE;
        --blue-800: #2A4365;

        --red-200: #FEB2B2;
        --red-500: #E53E3E;
        --red-800: #822727;

        --yellow-200: #FAF089;
        --yellow-500: #D69E2E;
        --yellow-800: #744210;

        --gray-200: #CBD5E0;
        --gray-500: #718096;
        --gray-800: #1A202C;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #fff;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
    [disabled]{
        opacity: 0,6;
        cursor: not-allowed;
    }
`