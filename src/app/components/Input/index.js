import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IMask from 'imask';
import { MdCheckCircle, MdCancel } from 'react-icons/md';
import { FormControl, Label, InputElement, Icon } from './styles';

export default class Input extends Component {
  componentDidMount() {
    const { mask } = this.props;
    if (mask) {
      const element = this.input;
      IMask(element, {
        mask,
      });
    }
  }

  render() {
    const { label, mask, handleChange, hasError, success } = this.props;

    const errorClass = hasError ? 'error' : '';
    const successClass = success ? 'success' : '';

    return (
      <FormControl className={`${errorClass} ${successClass}`}>
        <Label>{label}</Label>
        <InputElement
          mask={mask}
          ref={input => {
            this.input = input;
          }}
          onChange={handleChange}
        />
        {hasError && (
          <Icon className="icon">
            <MdCancel />
          </Icon>
        )}
        {success && (
          <Icon className="icon">
            <MdCheckCircle />
          </Icon>
        )}
      </FormControl>
    );
  }
}

Input.propTypes = {
  mask: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  success: PropTypes.bool,
};

Input.defaultProps = {
  mask: '',
  hasError: false,
  success: false,
};
