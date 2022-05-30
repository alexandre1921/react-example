import styled, { css } from "styled-components";

interface TitleProps {
  fontSize: number;
  underline?: boolean;
}

export const Title = styled.h4<TitleProps>`
  font-size: ${props => props.fontSize}px;

  ${props => props.underline && css`
    text-decoration: underline;
  `};
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

export const Container = styled.div`
  width: 250px;

  > img {
    width: 100%;
    height: 180px;
  }

  .flex {
    padding: 0px;
    display: flex;
    flex-direction: row;
  }

  .flex p:first-child {
    flex: 1;
  }

  button {
    width: 100%;

    & + button {
      margin-left: 10px;
    }
  }
`;