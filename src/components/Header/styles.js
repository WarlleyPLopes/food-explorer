import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark_700};

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 54px 0 22px;
    margin: 0 28px;
    gap: 2rem;

    .menu {
      border: none;
      background-color: transparent;
    }

    .singout {
      display: none;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.light_100};
    }

    @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
      max-width: ${DEVICE_BREAKPOINT.XL};
      padding: 24px 22px;
      margin: 0 auto;

      .singout {
        display: block;
      }
    }
  }
`

export const Menu = styled.button`
  display: none;
  border: none;
  background: none;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: block;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > img {
    width: 24px;
    height: 24px;
  }

  > h1 {
    width: max-content;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.light_100};
  }
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_100};

  > svg {
    margin-left: 16px;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.light_100};
  }

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;
    font-size: 16px;

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

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: none !important;
  }
`

export const Receipt = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  > span {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    left: 35px;
    top: -10px;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.tomato_200};
    color: ${({ theme }) => theme.colors.light_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    display: none;
  }
`

export const ReceiptDesktop = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 8px;

  border: none;
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.light_100};
  background-color: ${({ theme }) => theme.colors.tomato_100};

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: none;
  }
`