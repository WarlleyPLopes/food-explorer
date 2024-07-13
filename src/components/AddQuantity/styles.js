import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  > button {
    display: flex;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.light_300};
  }
  > span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.light_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    > span {
      font-size: 20px;
      font-weight: 700;
      line-height: 160%;
    }
  }
`