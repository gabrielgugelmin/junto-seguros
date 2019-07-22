import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

export const Button = styled.button`
  background: ${colors.white};
  border: 0;
  color: ${colors.portage};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 90px;
  line-height: 1.875;
  padding: 8px 24px;
  position: relative;
  text-align: left;
  transition: background-color 0.25s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${colors.niagara};
    box-shadow: 0 0 8px 3px rgba(23, 212, 153, 0.3);
  }

  svg {
    height: 90px;
    position: absolute;
    right: 24px;
    top: 0;
    font-size: 22px;
  }

  &.green {
    background-color: ${colors.turquoise};
    color: ${colors.white};
  }

  &:disabled {
    background-color: ${colors.silver};
    color: ${colors.white};
  }
`;

export const LinkElement = styled(Link)`
  align-items: center;
  background: ${colors.white};
  border: 0;
  color: ${colors.portage};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 90px;
  line-height: 1.875;
  padding: 8px 24px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: background-color 0.25s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${colors.niagara};
    box-shadow: 0 0 8px 3px rgba(23, 212, 153, 0.3);
  }

  svg {
    height: 90px;
    position: absolute;
    right: 24px;
    top: 0;
    font-size: 22px;
  }

  &.green {
    background-color: ${colors.turquoise};
    color: ${colors.white};
  }

  &:disabled {
    background-color: ${colors.silver};
    color: ${colors.white};
  }
`;
