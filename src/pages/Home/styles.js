import styled from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/devicebreakpoint"
export const Container = styled.div`
  width: 100%;
  height: 100%;

  font-family: "Poppins", sans-serif;

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    .margin {
      max-width: ${DEVICE_BREAKPOINT.XL};
      margin: 0 auto;
    }
  }
`

export const Section = styled.section`
  font-family: "Poppins", sans-serif;
  margin: 24px;
  gap: 47px;

  > h1 {
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 24px;
    margin-top: 24px;
  }

  > .dishes {
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
    overflow-x: hidden;
  }

  > .swiper-slide {
    margin-right: 24px;
    margin-left: 24px;
    flex-basis: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 250px;
    margin-bottom: 47px;
    margin-top: 47px;
  }

  .swiper {
    margin-bottom: 6rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 9rem;
    height: 51.2rem;
    margin: -25.6rem -1rem;

    color: ${({ theme }) => theme.colors.light_100};
    font-weight: bolder;
    mask-image: none;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .swiper-button-prev {
    background: linear-gradient(
      to left,
      transparent 0%,
      ${({ theme }) => theme.colors.dark_400} 100% 0%,
      transparent 100%
    );
  }

  .swiper-button-next {
    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.colors.dark_400} 100% 0%,
      transparent 100%
    );
  }

  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    > h1 {
      font-size: 32px;
      line-height: 140%;
      margin-bottom: 47px;
      margin-top: 47px;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`