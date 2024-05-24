import styled from "styled-components"

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;

  > a {
    color: ${({ theme }) => theme.colors.light_100};
    text-align: center;

    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 32px;
}
`

export const Form = styled.form`
  padding: 0 47px 0 65px;

  > label {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.light_400};
  }
`

export const Logo = styled.div`
  display: flex;
  gap: 10px;
  margin: 158px 0 73px;

  > img {
    width: 2.6875rem;
    height: 2.6875rem;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.light_100};
    font-size: 2.3125rem;
    font-weight: 700;
  }
`
