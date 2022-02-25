import styled from 'styled-components';

export const Container = styled.div`
  height: 476px;
`;

export const Content = styled.div`
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

   
    h1 {
        color: #293145;
        font-family: var(--sora);
        font-size: 40px;
        font-weight: 600;
        text-align: center;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`

export const Components = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    h5 {
        font-family: var(--sora);
        font-size: 18px;
        font-weight: 600;
        color: #293145;

        padding-top: 41px;
        padding-bottom: 16px;
    }
    p {
        font-family: var(--inter);
        font-size: 16px;
        font-family: 400 !important;
        color: #6E7275;
        text-align: center;

        max-width: 210px;
    }
`
