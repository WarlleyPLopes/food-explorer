import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINT } from "./devicebreakpoint"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      font-size: 12px;
    }
  }


    body {
        background-color: ${({ theme }) => theme.colors.dark_400} ;
        color: ${({ theme }) => theme.colors.light_300} ;
        -webkit-font-smoothing: antialiased;
    }

   a { 
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: all 0.2s;
    }
`