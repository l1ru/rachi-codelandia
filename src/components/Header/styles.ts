import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1080px;
    margin: 0 auto;
`;

export const Content = styled.div`
    height: 4.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        font-family: var(--inter);
        font-weight: 500;
        p {
            cursor: pointer;
            margin-right: 66px;
            transition: 400ms;
            &:hover {
                color: var(--blue)
            }
        }
    }
`
