import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 56px;

  > img {
    width: 264px;
    height: 264px;
    margin-bottom: 16px;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    gap: 48px;
    
    > img {
      width: 390px;
      height: 390px;
      flex-shrink: 0;
    }
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 27px;
    font-weight: 500;
    line-height: 140%;
  }

  > p {
    color: ${({ theme }) => theme.colors.light_300};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    margin: 24px 0;
  }

  > .wrapper {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 54px;

    > button {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border: none;
      border-radius: 5px;

      font-family: Poppins;
      font-size: 10px;
      font-weight: 500;
      line-height: 16.225px;
      gap: 5px;

      background-color: ${({ theme }) => theme.colors.tomato_100};
      color: ${({ theme }) => theme.colors.light_100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    display: flex;
    align-items: baseline;
    > h1 {
      font-size: 40px;
      font-weight: 500;
      line-height: 140%;
    }

    > p {
      font-size: 16.225px;
      font-weight: 400;
      line-height: 140%;
    }

    > .wrapper {
      > button {
      }
    }
  }
`

export const Ingredients = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 48px;

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    justify-content: left;
  }
`
