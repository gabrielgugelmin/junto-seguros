import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonElement, LinkElement } from './styles';

export const Button = ({ text, type, onClick, children, color, disabled }) => (
  <ButtonElement
    type={type}
    onClick={onClick}
    className={color}
    disabled={disabled}
  >
    {text}
    {children}
  </ButtonElement>
);

export const ButtonLink = ({ text, to, children, color, disabled }) => (
  <LinkElement to={to} className={color} disabled={disabled}>
    {text}
    {children}
  </LinkElement>
);

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ButtonLink.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: '',
  disabled: false,
};

ButtonLink.defaultProps = {
  color: '',
  disabled: false,
};
