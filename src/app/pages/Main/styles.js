import styled from 'styled-components';

export const Background = styled.div`
  background: linear-gradient(
    45deg,
    rgba(170, 100, 245, 1) 0%,
    rgba(141, 131, 238, 1) 100%
  );
  height: 100%;
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
`;

export const Icon = styled.i`
  display: block;
  margin-bottom: 40px;
  font-size: 28px;
`;
