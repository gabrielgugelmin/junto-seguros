import styled from 'styled-components';
import colors from '../../styles/colors';

export const FormControl = styled.div`
  background-color: ${colors.white};
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  position: relative;

  &.error {
    .icon {
      color: ${colors.red};
    }
  }

  &.success {
    .icon {
      color: ${colors.green};
    }
  }
`;

export const Label = styled.label`
  color: ${colors.bombay};
  font-size: 14px;
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
`;

export const InputElement = styled.input`
  border: 0;
  color: ${colors.darkGray};
  font-size: 18px;
  font-weight: 700;
  height: 40px;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.i`
  bottom: 24px;
  font-size: 18px;
  position: absolute;
  right: 24px;
`;
