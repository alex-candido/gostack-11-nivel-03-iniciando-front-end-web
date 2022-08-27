import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 0 16px 0 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #f4ede8;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `};

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `};

  input {
    flex: 1;
    background: transparent;
    padding: 16px 0 16px 0;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;