import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"
import { Link } from "react-router-dom"

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.dark_700};

  > .content {
    display: flex;
    gap: 32px;
    flex-shrink: 0;

    #nav-mobile {
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-rows: 114px auto;

      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;

      transition: transform 0.3s ease-in-out;
      transform: translateX(-100%);

      > header {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        padding: 2.8rem 2.8rem 0;

        background-color: ${({ theme }) => theme.colors.dark_700};
        color: ${({ theme }) => theme.colors.light_100};

        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 25px;

        > svg {
          cursor: pointer;
        }
      }

      > nav {
        padding: 2.8rem;
        background-color: ${({ theme }) => theme.colors.dark_400};

        > div {
          margin-bottom: 3.6rem;
        }

        > ul {
          list-style: none;

          li {
            padding: 1rem;
            border-bottom: solid 1px ${({ theme }) => theme.colors.dark_1000};

            > a {
              display: block;
              font-weight: 300;
              font-size: 24px;
              line-height: 140%;

              color: ${({ theme }) => theme.colors.light_300};
              text-decoration: none;
              cursor: pointer;

              transition: color 0.3s ease;

              &:hover {
                color: ${({ theme }) => theme.colors.cake_200};
              }
            }
          }
        }
      }

      @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
        display: none;
      }
    }

    #nav-mobile.active {
      transform: translateX(0);
    }

    .singOut {
      display: none;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.light_100};
    }

    @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
      max-width: ${DEVICE_BREAKPOINT.XL};
      height: 96px;
      padding: 24px 22px;
      margin: 0 auto;

      .singOut {
        display: block;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      padding: 64px 28px 32px;
      justify-content: space-between;
    }
  }
`

export const Hamburger = styled.button`
  display: flex;
  align-items: center;
  
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light_100};
  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    display: none;
  }
`

export const Logo = styled(Link)`
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

  > .textAdmin {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > h1 {
      width: max-content;
      font-family: "Roboto", sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.light_100};
    }
    > span {
      position: absolute;
      bottom: -15px;
      font-size: 12px;
      font-weight: 400;
      line-height: 160%;

      color: ${({ theme }) => theme.colors.cake_200};
    }
  }
`

export const InputDesktop = styled.div`
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

export const Bag = styled.div`
  > .bag {
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
  }

  > .bagDesktop {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px;

    border: none;
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.light_100};
    background-color: ${({ theme }) => theme.colors.tomato_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    .bag {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    .bagDesktop {
      display: none;
    }
  }
`