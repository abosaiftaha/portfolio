import { createGlobalStyle } from 'styled-components';

const FontGlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Light.eot');
    src: url('/fonts/Lato-Light.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Lato-Light.woff2') format('woff2'),
        url('/fonts/Lato-Light.woff') format('woff'),
        url('/fonts/Lato-Light.ttf') format('truetype'),
        url('/fonts/Lato-Light.svg#Lato-Light') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Regular.eot');
    src: url('/fonts/Lato-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Lato-Regular.woff2') format('woff2'),
        url('/fonts/Lato-Regular.woff') format('woff'),
        url('/fonts/Lato-Regular.ttf') format('truetype'),
        url('/fonts/Lato-Regular.svg#Lato-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Bold.eot');
    src: url('/fonts/Lato-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Lato-Bold.woff2') format('woff2'),
        url('/fonts/Lato-Bold.woff') format('woff'),
        url('/fonts/Lato-Bold.ttf') format('truetype'),
        url('/fonts/Lato-Bold.svg#Lato-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Salsa BT';
    src: url('/fonts/SalsaBT-Regular.eot');
    src: url('/fonts/SalsaBT-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/SalsaBT-Regular.woff2') format('woff2'),
        url('/fonts/SalsaBT-Regular.woff') format('woff'),
        url('/fonts/SalsaBT-Regular.ttf') format('truetype'),
        url('/fonts/SalsaBT-Regular.svg#SalsaBT-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

`;

export default FontGlobalStyle;
