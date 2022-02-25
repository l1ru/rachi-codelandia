import React from 'react';

import { Container, Content, Card } from './styles';

const Products: React.FC = () => {
  return (
      <Container>
          <Content>
                <div className="uor-plans" >
                    <h1>Nossos Planos</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                </div>
                <div className='card-container' >
                    <Card highlight={false} >
                        <h1>Bronze</h1>
                        <h2>28</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                        <button>Assinar</button>
                    </Card>

                    <Card highlight={true} >
                        <h1>Prata</h1>
                        <div className='prefer-highlight' >PREFERIDO</div>
                        <h2>57</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                        <button>Assinar</button>
                    </Card>

                    <Card highlight={false} >
                        <h1>Bronze</h1>
                        <h2>28</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                        <button>Assinar</button>
                    </Card>
                </div>
          </Content>
      </Container>
  );
}

export default Products;