import styled from "styled-components"

export const Container = styled.div``

export const Form = styled.form`
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;

  margin: 11px 32px;

  > a {
    display: flex;
    align-items: center;

    font-family: "Poppins", sans-serif;
    font-size: 16.546px;
    font-weight: 500;
    line-height: 140%;
    
    color: ${({ theme }) => theme.colors.light_300};

    svg {
      font-size: 30px;
    }
  }
  > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > label {
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.colors.light_400};
  }

  > div {
    font-family: "Roboto", sans-serif;
    margin-bottom: 0;

    border-radius: 8px;
    background: ${({ theme }) => theme.colors.dark_800};

    input {
      color: ${({ theme }) => theme.colors.light_100};
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;

      &::placeholder {
        color: ${({ theme }) => theme.colors.light_500};

        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
      }
    }
  }
`

export const ButtonUpload = styled.button`
  display: flex;
  padding: 12px 32px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.dark_800};
  color: ${({ theme }) => theme.colors.light_100};

  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  svg {
    font-size: 30px;
  }
`

export const Select = styled.select`
  display: flex;
  align-items: center;

  border: none;
  border-radius: 5px;
  padding: 16px;

  background: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_400};

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`

export const Section = styled.section`
  display: flex;
  padding: 4px 8px;
  gap: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.dark_800};
`

export const TextArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  height: 172px;
  padding: 14px;

  border-radius: 8px;
  border: none;
  resize: none;

  font-size: 16px;
  font-weight: 400;
  line-height: 100%;

  background: ${({ theme }) => theme.colors.dark_800};
  color: ${({ theme }) => theme.colors.light_100};

  &::placeholder {
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.light_500};
  }
`
