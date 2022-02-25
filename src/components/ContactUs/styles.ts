import styled from "styled-components";

export const Container = styled.div`
    background-image: url("../../src/assets/BG.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 382px;
`

export const Content = styled.div`
    background: rgba(41, 49, 69, 0.7);
    width: 100%;
    height: 100%;
`

export const Contact = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .text-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1 {
        margin-bottom: 16px;
        font-family: var(--sora);
        color: var(--white);
        font-size: 40px;
        font-weight: 600;
        }
        p {
            font-family: var(--sora);
            width: 528px;
            color: #DBDBDB;
            font-size: 18px;
            font-weight: 400;
            text-align: center;
        }
    }
    .btn-container {
        display: flex;
        align-items: center;
        input {
            width: 300px;
            background: none;
            border: none;
            border-bottom: 1px solid #FFFFFF;
            padding-bottom: 10px;
            
            font-family: var(--inter);
            font-weight: 500;
            font-size: 18px;
            &::placeholder {
                color: #fff;
            }
        }
        button {
            padding: 8px 32px;

            background: #0F9AFE;
            border-radius: 50px;
            border: none;

            font-family: var(--inter);
            font-weight: 500;
            font-size: 18px;

            margin-left: 72px;
            color: #fff;
        }
    }
`