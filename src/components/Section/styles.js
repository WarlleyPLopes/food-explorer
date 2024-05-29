import styled from "styled-components"

export const Container = styled.div`
  font-family: Poppins;
  margin: 24px;

  > h1 {
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 24px;
  }

  > .dishes {
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
    margin-bottom: 24px;
    overflow-x: scroll;
    padding-right: 24px;
  }
`