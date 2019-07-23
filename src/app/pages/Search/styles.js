import styled, { css, keyframes } from 'styled-components';
import colors from '../../styles/colors';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div`
  background-color: ${colors.gray};
  display: flex;
  flex-direction: column;
  flex: 1;

  .form__control {
    ${() =>
      css`
        animation: ${fadeInUp} 1.4s forwards 1;
      `}
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 24px;
`;
