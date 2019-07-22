import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    box-sizing: border-box;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  p {
    color: ${colors.white};
    font-size: 14px;
    line-height: 1.625;
    text-align: center;
  }
  `;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 515px;
  padding: 80px 15px;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  font-size: 22px;
`;
