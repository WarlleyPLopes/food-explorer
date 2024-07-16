import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 24px;
  gap: 47px;

  > h1 {
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 24px;
  }

  > .dishes {
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
    overflow-x: scroll;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    > h1 {
      font-size: 32px;
      line-height: 140%;
    }
  }
`