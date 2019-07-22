import styled from 'styled-components';
import colors from '../../styles/colors';

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
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 24px;
`;
