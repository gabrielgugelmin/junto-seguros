import React, { Component } from 'react';
import api from '../../../services/api';

import Header from '../../components/Header';
import Step from '../../components/Step';
import Input from '../../components/Input';
import { Button } from '../../components/Button';

import { MdArrowForward } from 'react-icons/md';
import { Container, Content, Footer } from './styles';

export default class Search extends Component {
  state = {
    hasError: false,
    success: false,
  };

  handleChange = async e => {
    if (e.target.value.length === 18) {
      try {
        const response = await api.get(
          `/quote/${encodeURIComponent(e.target.value)}`
        );
        this.setState({
          success: true,
          hasError: false,
          response,
        });
      } catch (err) {
        this.setState({
          hasError: true,
          success: false,
        });
      }
    } else if (e.target.value.length < 18) {
      this.setState({
        hasError: false,
        success: false,
      });
    }
  };

  render() {
    const { hasError, success } = this.state;

    return (
      <Container>
        <Header
          title="Nova cotação"
          subtitle="#0980"
          photoSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
          alt="Foto do(a) usuário(a)"
        />
        <Content>
          <Step number="1" title="Buscar por CNPJ ou empresa" />
          <Input
            label="CNPJ / Empresa"
            mask="00.000.000/0000-00"
            handleChange={this.handleChange}
            hasError={hasError}
            success={success}
          />
          <Footer>
            <Button text="OK" color="green" disabled={!success}>
              <MdArrowForward />
            </Button>
          </Footer>
        </Content>
      </Container>
    );
  }
}
