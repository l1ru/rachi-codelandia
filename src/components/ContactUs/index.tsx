import React from 'react';

import { Container,Content, Contact } from './styles';

const ContactUs = () => {
    return (
        <Container>
            <Content>
                <Contact>
                    <div className='text-container'>
                        <h1>Contato</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                    </div>
                    <div className="btn-container">
                        <input type="email" placeholder='Seu melhor e-mail' />
                        <button>Enviar</button>
                    </div>
                </Contact>
            </Content>
        </Container>
    )
}

export default ContactUs;