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

export const Section = styled.section`
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
    margin-top: 24px;
  }

  > .dishes {
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
    overflow-x: hidden;
  }

  >.swiper-slide {
    margin-right: 24px;
    margin-left: 24px;
    flex-basis: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 250px;
    margin-bottom: 47px;
    margin-top: 47px;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    > h1 {
      font-size: 32px;
      line-height: 140%;
      margin-bottom: 47px;
      margin-top: 47px;
    }
  }
`