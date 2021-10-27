const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
  :root {
    --hex-blue: #2c346b;
    --hex-pink: #e598d8;
    --hex-black: #272727;
    --hex-white: #F6F8F6;

    --rgb-blue: 44, 52, 107;
    --rgb-pink: 229, 152, 216;
    --rgb-black: 39, 39, 39;
    --rgb-white: 246, 248, 246;

    font-family: 'Poppins', sans-serif;
  }

  body {
    min-height: 100vh;

    overflow-x: hidden;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
