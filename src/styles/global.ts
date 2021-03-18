import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E62E4D;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // para configurar o tamanho de fonte da aplicação
    // font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    // REM: 1rem = tamanho da fonte da página

    body {
        background: var(---background);
        -webkit-font-smoothing: antialiased; // para deixar as fontes mais nítidas em navegadores que utilizam o webkit
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;