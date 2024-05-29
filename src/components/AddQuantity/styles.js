import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  > button {
    display: flex;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.light_300};
  }
  > span {
    font-family: "Roboto", sans-serif;
    font-size: 1.4141rem;
    font-weight: 700;
    line-height: 160%;
  }
`