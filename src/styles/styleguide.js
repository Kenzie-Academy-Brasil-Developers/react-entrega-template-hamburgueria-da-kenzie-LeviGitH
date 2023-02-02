import { createGlobalStyle } from "styled-components";

export const Styleguide = createGlobalStyle`
    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;

        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
    }
`;

// font-family: 'Inter', sans-serif;
