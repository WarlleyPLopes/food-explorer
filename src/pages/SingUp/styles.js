import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  font-family: "Roboto", sans-serif;

  > .container {
    padding: 0 47px 0 65px;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    > .container {
      height: 100vh;
      display: grid;
      padding: 0;
      margin: 0 auto;

      grid-template-columns: 1fr 1fr;
      align-content: center;

      .form {
        display: grid;
        justify-content: center;
      }
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    padding: 0 108px 0 154px;
  }
`

export const Logo = styled.div`
  display: flex;
  gap: 10px;
  margin: 158px 0 73px;

  > img {
    width: 2.6875rem;
    height: 2.6875rem;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.light_100};
    font-size: 2.3125rem;
    font-weight: 700;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > a {
    color: ${({ theme }) => theme.colors.light_100};
    text-align: center;

    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 32px;
  }

  > h1 {
    display: none;
  }

  > label {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.light_400};
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 476px;
    padding: 64px;

    border-radius: 16px;
    background: ${({ theme }) => theme.colors.dark_700};

    > h1 {
      display: block;
      margin-bottom: 32px;
      text-align: center;

      font-family: "Poppins", sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.colors.light_100};
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    color: ${({ theme }) => theme.colors.light_400};
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
  }
`