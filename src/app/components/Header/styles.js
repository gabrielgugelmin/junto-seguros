import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.header`
  background: linear-gradient(
    to right,
    rgba(142, 131, 238, 1) 0%,
    rgba(170, 100, 245, 1) 100%
  );
  padding: 24px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  display: inline-block;
  font-size: 24px;
  margin-right: 16px;

  svg {
    fill: ${colors.white};
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.56px;

  @media (min-width: 768px) {
    font-size: 16px;
    letter-spacing: ls(16, 40);
  }
`;

export const Subtitle = styled.small`
  color: ${colors.white};
  font-size: 12px;
`;

export const Text = styled.div`
  text-align: left;
`;

export const SubmitButton = styled.button.attrs(props => ({
  disabled: props.isLoading || props.search.length === 0,
}))`
  background-color: #3451ff;
`;

export const Avatar = styled.div`
  background: center / cover no-repeat ${props => `url(${props.photoSrc})`};
  border-radius: 50%;
  height: 32px;
  margin-left: auto;
  overflow: hidden;
  width: 32px;

  @media (min-width: 768px) {
    height: 38px;
    width: 38px;
  }
`;
