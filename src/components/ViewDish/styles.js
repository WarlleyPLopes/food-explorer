import styled from "styled-components"

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 56px;

  > img {
    width: 264px;
    height: 264px;
    margin-bottom: 16px;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 27.041px;
    font-weight: 500;
    line-height: 140%;
  }

  > p {
    color: ${({ theme }) => theme.colors.light_300};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    margin: 24px 0;
  }

  > .ingredients {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 48px;
  }

  > .wrapper {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 54px;

    > button {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border: none;
      border-radius: 5px;
      
      font-family: Poppins;
      font-size: 10px;
      font-weight: 500;
      line-height: 16.225px;
      gap: 5px;

      background-color: ${({ theme }) => theme.colors.tomato_100};
      color: ${({ theme }) => theme.colors.light_100};
      

      
    }

    > .addDish {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;

      > button {
        display: flex;
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.light_300};
      }
      > span {
        font-family: "Roboto", sans-serif;
        font-size: 1.4141rem;
        font-weight: 700;
        line-height: 160%;
      }
    }
  }
`
