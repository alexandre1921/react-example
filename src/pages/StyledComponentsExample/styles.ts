import styled, { css } from 'styled-components';

interface InfoProps {
    bold?: boolean;
}

export const Info = styled.p<InfoProps>`
    border-collapse: collapse;
    font-family: Proxima Nova;
    white-space: normal;
    display: block;
    font-size: 14px;
    color: #00a650;
    box-sizing: border-box;
    margin-top: 4px;

    ${props =>
        props.bold &&
        css`
            font-weight: bold;
        `};
`;

export const Container = styled.div`
    width: 225px;
    margin: 50px;

    border-radius: 5px;

    border: 1px solid #eee !important;

    img {
        width: 100%;
        height: 225px;
    }

    div {
        padding: 15px;

        h3 {
            border-collapse: collapse;
            font-family: Proxima Nova;
            user-select: none;
            white-space: normal;
            vertical-align: text-bottom;
            color: #333;
            font-size: 24px;
            padding-right: 10px;
            box-sizing: border-box;
            line-height: 1em;
        }

        > ${Info} {
            margin-top: 15px;
        }
        > ${Info} + ${Info} {
            margin-top: 0px;
        }
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 10px;

    &.danger {
        background-color: #dc3545;
    }

    &.primary {
        background-color: #007bff;
    }
`;
