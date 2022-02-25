import styled from 'styled-components';

export const Container = styled.div`
    height: 850px;
`;

export const Content = styled.div`
    max-width: 1080px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    .uor-plans {
        margin-top: 50px;
        h1 {
            font-family: var(--sora);
            font-weight: 600;
            font-size: 40px;
            text-align: center;
            color: #293145;
        }
        p {
            font-size: 18px;
            font-family: var(--inter);
            font-weight: 400;
            line-height: 25px;
            text-align: center;

            margin-top: 16px;
        
            width: 570px;

            color: #6E7275;
        }
    }
    .card-container {
        display: flex;
        margin-top: 96px;
        align-items: center;
        justify-content: space-between;
    }
`

type CardProps = {
    highlight: boolean
}

export const Card = styled.div<CardProps>`
    width: 370px;
    height: 471px;
    background-color: ${(props) => props.highlight ? "#293145" : "#EFF8FF"};
    border-radius: 8px;

    :nth-child(1) {
        margin-right: 30px;
    }

    :nth-child(3) {
        margin-left: 30px;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    h1 {
        font-family: var(--sora);
        font-weight: 600;
        font-size: 24px;
        color: ${(props) => props.highlight ? "#FFFFFF" : "#293145"};
    }
    .prefer-highlight {
        padding: 5px 32px;

        background: #0F9AFE;
        border-radius: 15px;

        font-family: var(--inter);
        font-weight: 600;
        font-size: 14px;
        color: #FFF;
    }
    h2 {
        font-family: var(--sora);
        font-weight: 700;
        font-size: 50px;
        color: ${(props) => props.highlight ? "#FFFFFF" : "#293145"};

        &::before {
            content: "R$";
            font-size: 20px;
            font-family: var(--sora);
            font-weight: 700;
            
            position: relative;
            bottom: 1.3vw;
        }
        &::after {
            content: "/mês";
            font-size: 20px;
            font-family: var(--sora);
            font-weight: 700;
        }
    }
    p {
        width: 300px;

        font-family: var(--inter);
        font-size: 18px;

        line-height: 25px;

        text-align: center;
        color: ${(props) => props.highlight ? "#DBDBDB" : "#6E7275"};
    }
    button {
        padding: 8px 80px;
        font-family: var(--sora);
        font-weight: 500;
        font-size: 20px;

        color: #FFFFFF;

        background-color: var(--blue);
        border: 0;
        border-radius: 50px;
        box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5)
    }
`
