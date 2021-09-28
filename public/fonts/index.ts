import { createGlobalStyle } from 'styled-components';

const FontGlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Sora';
    src: url('/fonts/Sora-SemiBold.eot');
    src: url('/fonts/Sora-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Sora-SemiBold.woff2') format('woff2'),
        url('/fonts/Sora-SemiBold.woff') format('woff'),
        url('/fonts/Sora-SemiBold.ttf') format('truetype'),
        url('/fonts/Sora-SemiBold.svg#Sora-SemiBold') format('svg');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Sora';
    src: url('/fonts/Sora-ExtraLight.eot');
    src: url('/fonts/Sora-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Sora-ExtraLight.woff2') format('woff2'),
        url('/fonts/Sora-ExtraLight.woff') format('woff'),
        url('/fonts/Sora-ExtraLight.ttf') format('truetype'),
        url('/fonts/Sora-ExtraLight.svg#Sora-ExtraLight') format('svg');
    font-weight: 200;
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
