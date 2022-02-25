import React from 'react';

import { Container, Content } from './styles';

import Store1 from '../../assets/Store1.svg'
import Store2 from '../../assets/Store2.svg'

import Sitting from '../../assets/Sentado.svg'

const AppStore: React.FC = () => {
    return (
        <Container>
            <Content>
                <div className='appstore-div-content'>
                    <h1>Baixe nosso app para desfrutar mais!</h1>
                    <p>
                        Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.
                    </p>
                    <div>
                        <img src={Store2} />
                        <img src={Store1} />
                    </div>
                </div>
                <img src={Sitting} className="sittings-img" />''
            </Content>
        </Container>
    );
}

export default AppStore;