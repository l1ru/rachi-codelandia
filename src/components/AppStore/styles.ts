import styled from 'styled-components';

export const Container = styled.div`
    height: 475px;
    background-color: #EFF8FF;
`;

export const Content = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .appstore-div-content {
        padding-top: 117px;
        h1 {
            font-family: var(--sora);
            font-weight: 600;
            font-size: 32px;
            color: #293145;
        }
        p {
            max-width: 400px;
            font-family: var(--inter);
            font-size: 16px;
            font-weight: 400;
            color: #6E7275;

            padding-top: 24px;
            padding-bottom: 35px;
        }
    }
    .sittings-img {
        margin-top: 38px;
    }
`
