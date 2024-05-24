import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.tomato_100};
  margin-bottom: 32px;
  border-radius: 8px;

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;

    font-size: 1rem;


    color: ${({ theme }) => theme.colors.light_100};
    background: transparent;
    border: 0;

    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 400;

      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`
