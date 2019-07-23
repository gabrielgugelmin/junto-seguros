import styled, { css, keyframes } from 'styled-components';

export const Background = styled.div`
  background: linear-gradient(
    45deg,
    rgba(170, 100, 245, 1) 0%,
    rgba(141, 131, 238, 1) 100%
  );
  height: 100%;
`;

const animateTitle = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const animateP = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 24px 24px;
  text-align: center;

  a {
    margin-top: 64px;
  }

  p {
    ${() =>
      css`
        animation: ${animateP} 1.4s forwards 1;
      `}
  }

  h1 {
    ${() =>
      css`
        animation: ${animateTitle} 1s forwards 1;
      `}
  }
`;

const animateIcon = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Icon = styled.i`
  display: block;
  margin-bottom: 40px;
  font-size: 28px;

  ${() =>
    css`
      animation: ${animateIcon} 1s forwards 1;
    `}
`;
