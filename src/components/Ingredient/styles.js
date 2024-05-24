import styled from "styled-components"

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 4px 8px;
  gap: 8px;

  background: ${({ theme }) => theme.colors.dark_1000};
`