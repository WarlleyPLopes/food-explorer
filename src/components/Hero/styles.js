import styled from "styled-components";

export const Container = styled.div`
  margin: 44px 16px 62px 36px;
  border-radius: 2.917px;
  background: ${({ theme }) => theme.colors.gradients_200};

  .rectangle {
    width: 100%;
    height: 120px;

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: end;

    > img {
      flex-shrink: 0;
      position: absolute;
      left: 5px;
      top: 130px;
    }

    > .text {
      width: 170px;

      display: flex;
      flex-direction: column;
      position: relative;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.light_300};

      h1 {
        font-size: 1.125rem;
        font-weight: 600;
      }
      p {
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 400px) {
    .rectangle .text {
        width: 215px;
        h1 {
            font-size: 18px;
        }
        p{
            font-size: 12px;
        }
    }
  }
`