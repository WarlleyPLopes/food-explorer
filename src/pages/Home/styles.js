import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"
export const Container = styled.div`
  width: 100%;
  height: 100%;

  font-family: "Poppins", sans-serif;

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    .margin {
      max-width: ${DEVICE_BREAKPOINT.XL};
      margin: 0 auto;
    }
  }
`
