import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  display: none;
  font-family: "Roboto", sans-serif;

  background-color: ${({ theme }) => theme.colors.dark_400};

  > footer {
    position: fixed;
    bottom: 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: block;
    grid-area: none;
    position: absolute;
    z-index: 2;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.dark_700};
  padding: 54px 0 22px;

  > .wrapper {
    display: flex;
    align-items: center;
    margin: 0 28px;
    gap: 16px;
    color: ${({ theme }) => theme.colors.light_100};

    > button {
      display: flex;
      align-items: center;
      border: none;
      font-size: 30px;

      background: transparent;
      color: ${({ theme }) => theme.colors.light_100};
    }

    h1 {
      font-size: 21.163px;
      font-weight: 400;
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.light_100};

  margin: 36px 28px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.dark_900};

  > input {
    height: 56px;
    width: 100%;
    padding: 12px 14px;

    color: ${({ theme }) => theme.colors.light_100};
    background: transparent;
    border: 0;

    &::placeholder {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
  > img {
    width: 24px;
    height: 24px;
    margin-left: 14px;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 28px;

  > button {
    display: flex;
    justify-content: left;
    margin: 0;
    padding: 0;

    border: none;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 300;
    line-height: 140%; /* 33.6px */
    background: transparent;
    color: ${({ theme }) => theme.colors.light_300};
  }

  > a {
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors.light_300};
  }

  > .line {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.dark_1000};
  }
`