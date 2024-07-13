import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gradients_200};
  margin: 44px 16px 62px 30px;
  border-radius: 3px;

  .background {
    height: 120px;
    display: flex;
    position: relative;
    width: 100%;

    align-items: center;
    justify-content: space-between;

    > .hero {
      width: 191px;
      height: 149px;
      flex-shrink: 0;

      position: relative;
      left: -30px;
      top: -14px;
    }

    > .text {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-right: 21px;

      h1 {
        font-size: 18px;
        font-weight: 600;
        line-height: 140%;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    height: 220px;
    display: flex;
    align-items: center;
    margin: 104px 16px 63px 30px;
    border-radius: 8px;

    .background {
      > .hero {
        width: 432px;
        height: 306px;

        position: relative;
        left: -38px;
        top: -43px;
      }

      > .text {
        margin-right: 100px;
        gap: 8px;

        h1 {
          font-size: 40px;
          font-weight: 500;
          line-height: 140%;
        }
        p {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 100%;
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    height: 260px;
    display: flex;
    align-items: center;
    margin: 164px 16px 63px 30px;
    border-radius: 8px;

    .background {
      > .hero { 
        width: 632px;
        height: 406px;

        position: relative;
        left: -55px;
        top: -73px;
      }

      > .text {
        margin-right: 100px;
        gap: 8px;

        h1 {
          font-size: 40px;
          font-weight: 500;
          line-height: 140%;
        }
        p {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 100%;
        }
      }
    }
  }
`