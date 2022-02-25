import React from 'react';

import { Container, Content } from './styles';

import Logo from '../../assets/Logo.svg'

const Header: React.FC = () => {
  return (
      <Container>
        <Content>
            <img src={Logo} />
            <div>
                <p>Funcionalidades</p>
                <p>App</p>
                <p>Planos</p>
                <p>Contato</p>
            </div>
        </Content>
      </Container>
  );
}

export default Header;