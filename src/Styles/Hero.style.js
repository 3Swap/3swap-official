import styled from 'styled-components';
import { SplashColor, Bg } from '../Assets/Utility';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  position: relative;
  @media (max-width: 900px) {
    position: relative;
    height: 100%;
  }
  @media (min-height: 840px) and (max-height: 920px) {
    height: fit-content;
  }
  @media (min-height: 600px) and (max-height: 800px) {
    height: fit-content;
  }
  .cta-wrapper {
    padding: 40px 0px 60px 0px;
    h1 {
      width: 65%;
      font-size: 50px;
      font-weight: 800;
      line-height: 65px;
      margin-top: 40px;
      color: black;
      @media (max-width: 900px) {
        font-size: 24px;
        width: 100%;
      }
      @media (min-width: 1400px) {
        max-width: 20ch;
      }
    }
    .cta-container {
      width: 40%;
      margin-left: 200px;
      margin-top: 20px;
      @media (max-width: 900px) {
        margin-left: 80px;
        width: 70%;
      }
      p {
        font-size: 16px;
        max-width: 30ch;
        margin-bottom: 30px;
        @media (max-width: 900px) {
          font-size: 14px;
        }
      }
    }
    .hero-arrow {
      position: absolute;
      width: 100px;
      margin-top: 0px;
      margin-left: 50px;
      img {
        height: 90px;
      }
      @media (max-width: 900px) {
        width: 60px;
        margin-left: 10px;

        img {
          height: 70px;
        }
      }
    }
    @media screen and (max-width: 900px) {
      padding: 40px 20px 0px 20px;
      text-align: center;

      h1 {
        width: 100%;
        font-size: 25px;
        line-height: 38px;
      }
    }
  }

  .cta-supported-by {
    background: url(${Bg});
    background-repeat: no-repeat;
    width: 100%;

    background-size: cover;
  }

  .sponsors {
    padding-top: 20px;

    h3 {
      color: ${SplashColor};
      margin-top: 35px;
      font-size: 30px;
      margin-bottom: 20px;
      @media (max-width: 900px) {
        margin-top: 25px;
      }
      @media (min-width: 1400px) {
      }
    }
  }
  .logo-container {
    display: flex;
    width: 100%;
    @media (max-width: 900px) {
      display: flex;
      margin-left: -20px;
      margin-top: 90px;
    }
    img {
      width: 200px;
      height: 35px;
      &:first-child {
        margin-left: -40px;
      }
      object-fit: contain;
      @media (max-width: 900px) {
        height: 25px;
        margin-left: 20px;
      }
    }
  }
  .cta-wrapper-right {
    .hero-img {
      width: 500px;
      position: absolute;
      top: 10px;
      right: 0;
      transform: rotate(-8deg);
      @media (max-width: 900px) {
        display: none;
      }
      @media (min-width: 1400px) {
        height: 630px;
        width: 500px;
        object-fit: contain;
        top: 0;
      }
    }

    @media screen and (max-width: 900px) {
      display: flex;
      .mobile-hero-img {
        width: 100%;
        height: 400px;
        object-fit: contain;
      }
    }
  }

  .mobile-hero-img {
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

export default HeroWrapper;
