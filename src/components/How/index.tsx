import React from 'react';

import { Container, Content, Components } from './styles';

import Happy from '../../assets/Happy.svg'
import Person from '../../assets/Person.svg'
import Security from '../../assets/Security.svg'

const How: React.FC = () => {
  return (
      <Container>
        <Content>
            <h1>Como funciona</h1>
            <div>
                <Components>
                    <img src={Security} />
                    <h5>Crie conexões</h5>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </Components>

                <Components>
                    <img src={Person} />
                    <h5>Crie conexões</h5>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </Components>

                <Components>
                    <img src={Happy} />
                    <h5>Crie conexões</h5>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </Components>
            </div>
        </Content>
      </Container>
  );
}

export default How;