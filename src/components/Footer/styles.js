import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark_700};
  width: 100%;

  .margin {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 1.735rem;
    padding: 24px 0;
    gap: 0.5rem;

    > p {
      max-width: max-content;
      color: ${({ theme }) => theme.colors.light_200};
      font-family: "DM Sans", sans-serif;
      text-align: right;
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    .margin {
      max-width: ${DEVICE_BREAKPOINT.XL};
      padding: 24px 22px;
      margin: 0 auto;
    }
  }
`
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > span {
    width: max-content;
    color: ${({ theme }) => theme.colors.light_700};
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
  }
`