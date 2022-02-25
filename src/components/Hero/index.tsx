import React from 'react';

import { Container, Content } from './styles';

import HeroImage from '../../assets/Hero.svg'

const Hero: React.FC = () => {
  return (
      <Container>
        <Content>
            <div>
                <div>
                <p>Rachi</p>
                <p>é tudo para você</p>
                <p>precisando de um só lugar.</p>
                </div>
                <button>Cadastrar-se</button>
            </div>
            <img src={HeroImage} />
        </Content>
      </Container>
  );
}

export default Hero;