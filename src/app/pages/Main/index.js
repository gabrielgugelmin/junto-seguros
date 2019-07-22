import React from 'react';
import { MdShowChart, MdArrowForward } from 'react-icons/md';
import { Title } from '../../styles/global';
import { Background, Content, Icon } from './styles';

import { ButtonLink } from '../../components/Button';

const Main = () => (
  <Background>
    <Content>
      <Icon>
        <MdShowChart fill="#FFF" />
      </Icon>
      <Title>Cotação de seguros</Title>
      <p>Solução inovadora da líder de mercado</p>
      <ButtonLink text="Iniciar" to="/search">
        <MdArrowForward />
      </ButtonLink>
    </Content>
  </Background>
);

export default Main;
