import React from 'react';
import PropTypes from 'prop-types';
import { Step as StepElement, Number, Title } from './styles';

const Step = ({ number, title }) => (
  <StepElement>
    <Number>{number}</Number>
    <Title>{title}</Title>
  </StepElement>
);

Step.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Step;
