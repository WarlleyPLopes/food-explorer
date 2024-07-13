import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  font-family: "Poppins", sans-serif;

  /* width: 210px;
  height: 292px; */

  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  position: relative;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.dark_300};
  background: ${({ theme }) => theme.colors.dark_200};

  > .buttons {
    margin-top: 12px;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 304px;
    gap: 15px;
  }
`

export const Favorite = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;

  background: transparent !important;
  border: none !important;
  cursor: pointer;
`

export const ImgDish = styled.div`
  > img {
    width: 88px;
    height: 88px;
    flex-shrink: 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    > img {
      width: 176px;
      height: 176px;
      flex-shrink: 0;
    }
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  h2 {
    width: max-content;
    color: ${({ theme }) => theme.colors.light_300};
    text-align: center;

    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }

  > p {
    display: none;
  }

  > span {
    color: ${({ theme }) => theme.colors.cake_200};
    text-align: center;

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    gap: 15px;

    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 140%;
    }

    p {
      display: block;

      color: ${({ theme }) => theme.colors.light_400};
      text-align: center;

      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 160%;
    }

    > span {
      color: ${({ theme }) => theme.colors.cake_200};
      text-align: center;

      font-family: "Roboto", sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 12px;

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    margin-top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`