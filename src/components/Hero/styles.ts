import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--white-200);
    height: 640px;
`;

export const Content = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    padding-top: 108px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
        /* margin-top: 50px; */
    }
    div {
        padding-bottom: 66px;
        p {
            :nth-child(1) {
                /* padding-top: 178px; */
            }
            width: 574px;
            font-size: 48px;
            font-family: var(--sora);
            font-weight: 600;
        }
    }
    button {
        padding: 16px 36px;
        background-color: var(--blue);
        border-radius: 50px;
        border: none;

        font-family: var(--inter);
        font-weight: 600;
        font-size: 20px;
        color: var(--white);
    }
`
