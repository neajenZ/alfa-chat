import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.backgroundBlock};
        margin: 0;
        height: 100%;
        padding: 0;
    }
    html {
        height: 100%;
    }
    #root {
        height: 100%;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url('/font/Gilroy-SemiBold.ttf') format('truetype');
        font-style: normal;
        font-weight: 600;
        font-display: auto;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url('/font/Gilroy-Medium.ttf') format('truetype');
        font-style: normal;
        font-weight: 500;
        font-display: auto;
    }
    @font-face {
        font-family: 'Gilroy';
        src: url('/font/Gilroy-ExtraBold.ttf') format('truetype');
        font-style: normal;
        font-weight: 900;
        font-display: auto;
    }
    * {
        box-sizing: border-box;
        font-family: 'Gilroy', serif;
    }
    
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    
    p {
        margin: 0;
        padding: 0;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    
    img {
        font-size: 0;
    }

    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }

    .custom-side-btn {
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        display: flex !important;
        align-items: center !important;
        background: transparent !important;
        justify-content: center !important;
    }

    .custom-side-btn:hover {
        color: black !important;
    }

    .custom-side-btn a {
        color: black !important;
        padding-top: 5px !important; 
    }
    
    .custom-active-page-btn {
        color: black !important;
    }
    
    .custom-container-pag {
        align-items: stretch;
        display: flex;
    }
    
    .container-pagination {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 5px;
        margin-left: auto;
    }
`