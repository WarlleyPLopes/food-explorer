import styled from "styled-components"

export const Container = styled.div`
  font-family: "Roboto", sans-serif;

  > a {
    margin: 0 28px;
    color: ${({ theme }) => theme.colors.light_300};
    font-family: Poppins;
    font-size: 24px;
  }

  > .line {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.dark_1000};
    margin: 0 28px;
  }

  > footer {
    position: fixed;
    bottom: 0;
  }
`

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.dark_700};

  > div {
    display: flex;
    align-items: center;

    margin: 0 28px;
    padding: 54px 0 22px;
    gap: 1rem;

    button {
      background: transparent;
      border: none;
    }

    h2 {
      color: ${({ theme }) => theme.colors.light_100};
      font-size: 21.1632px;
      font-weight: 400;
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.light_100};

  margin: 36px 28px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.dark_900};

  > input {
    height: 56px;
    width: 100%;
    padding: 12px 14px;

    color: red;
    background: transparent;
    border: 0;

    &::placeholder {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
  > img {
    width: 24px;
    height: 24px;
    margin-left: 14px;
  }
`