import styled from "styled-components"

export const Container = styled.div`
  font-family: "Poppins", sans-serif;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
    font-weight: 500;
    line-height: 140%;

    margin: 2.3481rem 3.5rem 1rem;
    border: none;

    background: transparent;
    color: ${({ theme }) => theme.colors.light_300};
  }
`