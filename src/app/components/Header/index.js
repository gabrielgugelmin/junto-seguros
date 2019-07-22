import React from 'react';
import { MdShowChart } from 'react-icons/md';
import PropTypes from 'prop-types';

import {
  Header as HeaderElement,
  Icon,
  Text,
  Title,
  Subtitle,
  Avatar,
} from './styles';

const Header = ({ title, subtitle, photoSrc }) => (
  <HeaderElement>
    <Icon>
      <MdShowChart />
    </Icon>
    <Text>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Text>
    <Avatar photoSrc={photoSrc} />
  </HeaderElement>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  photoSrc: PropTypes.string.isRequired,
};

export default Header;
