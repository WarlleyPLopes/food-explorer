import styled from "styled-components"

export const Container = styled.div`
  font-family: Poppins;

  min-width: 210px;

  border-radius: 8px;
  border: 1px solid var(--Dark-Dark-300, #000204);
  background: var(--Dark-Dark-200, #00070a);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 12px;

  > .icon {
    width: 24px;
    height: 22px;
    position: relative;
    left: 70px;

  }

  > .image img {
    width: 88px;
    height: 88px;
    flex-shrink: 0;
  }

  > .text {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    h2 {
      color: ${({ theme }) => theme.colors.light_300};
      text-align: center;

      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
    }

    > span {
      color: ${({ theme }) => theme.colors.cake_200};
      text-align: center;

      /* Roboto/Small regular */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }
  }

  > .buttons {
    margin-top: 12px;
    gap: 16px;
  }
  @media (max-width: 500px) {
    > .text p {
      display: none;
    }
  }
`
