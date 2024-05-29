import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 10px;

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.colors.light_500};
  color: ${({ theme, isNew }) =>
    isNew ? theme.colors.light_500 : theme.colors.light_100};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.colors.light_500}` : "none"};

  > button {
    color: ${({ theme, isNew }) =>
      isNew ? theme.colors.light_500 : theme.colors.light_100};
    border: none;
    background: none;

    .button-add {
      color: ${({ theme }) => theme.colors.light_500};
    }

    .button-delete {
      color: ${({ theme }) => theme.colors.light_100};
    }
  }

  > input {
    width: 100%;

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.light_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`
