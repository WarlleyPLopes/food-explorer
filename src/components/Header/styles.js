import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark_700};

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 28px;
    padding: 54px 0 22px;
    gap: 1rem;

    .menu {
      background-color: transparent;
      border: none;
    }
  }
`

export const Menu = styled.button`
  background: none;
  display: none;
  border: none;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: block;
  }
`

export const Logo = styled.div`
  display: inline-flex;
  gap: 0.5rem;

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.3227rem;

    color: ${({ theme }) => theme.colors.light_100};
  }
`

export const Receipt = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  > div {
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
`