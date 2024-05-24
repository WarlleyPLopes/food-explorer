import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tomato_100};
  color: ${({ theme }) => theme.colors.light_100};

  padding: 12px 24px;
  margin-top: 1rem;

  border: none;
  border-radius: 5px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tomato_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tomato_400};
  }
`