import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  height: 100vh;

  @media (min-width:${DEVICE_BREAKPOINT.MD}) {
    > footer {
      position: absolute;
      bottom: 0;
    }
  }
`

export const Content = styled.div`
  > button {
    font-size: 24px;
    font-weight: 500;
    line-height: 140%;
    margin: 31px 56px 16px;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    max-width: ${DEVICE_BREAKPOINT.XL};
    margin: 0 auto;
    > button {
      font-weight: 700;
      margin: 24px 0 42px 16px;
    }
  }
`
