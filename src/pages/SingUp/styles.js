import styled from "styled-components"

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;

  > a {
    color: ${({ theme }) => theme.colors.light_100};
    text-align: center;

    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin-top: 2rem;
}
`

export const Form = styled.form`
  padding: 0 47px 0 65px;

  > label {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.light_400};
  }
`

export const Logo = styled.div`
  display: flex;
  gap: 10px;
  margin: 9.875rem 0 4.5625rem;

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
