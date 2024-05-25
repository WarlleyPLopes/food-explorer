import styled from "styled-components"

export const Container = styled.span`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 4px 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 24px; 
  text-align: center;

  background-color: ${({ theme }) => theme.colors.dark_1000};
  color: ${({ theme }) => theme.colors.light_100};
`