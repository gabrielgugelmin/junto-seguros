import styled from 'styled-components';
import colors from '../../styles/colors';

export const Step = styled.div`
  align-items: center;
  display: flex;
  padding: 24px;
`;

export const Number = styled.div`
  align-items: center;
  border: 2px solid ${colors.heliotrope};
  border-image-source: linear-gradient(${colors.portage}, ${colors.heliotrope});
  border-image-slice: 2;
  color: ${colors.portage};
  display: flex;
  font-size: 12px;
  font-weight: 700;
  height: 24px;
  justify-content: center;
  margin-right: 24px;
  width: 24px;
`;

export const Title = styled.h3`
  color: ${colors.darkGray};
  font-weight: 700;
  font-size: 16px;
  margin: 0;
`;
