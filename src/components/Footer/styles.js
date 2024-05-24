import styled from "styled-components"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark_700};
  width: 100%;

  .margin {
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 0 1.735rem;
    padding: 24px 0;
    gap: 0.5rem;
  }
`
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4375rem;

  > span {
    color: ${({ theme }) => theme.colors.light_700};
    font-family: "Roboto", sans-serif;
    font-size: 15.2624px;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.colors.light_200};
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
  }
`