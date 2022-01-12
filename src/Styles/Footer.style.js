import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Assets/Utility';
import { Secondary } from './Buttons.style';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  p {
    font-size: 16px;
    font-weight: 400;
  }
  h1 {
    font-size: 40px;
    font-weight: 800;
  }
  .footer-container {
    width: 100%;
    border-radius: 50px 50px 0 0;
    background: ${PrimaryColor};

    display: flex;
    flex-direction: column;
    padding: 50px 20px;
    align-items: center;
    color: white;
    @media screen and (max-width: 900px) {
      width: 90%;
      margin: 0px auto;
      border-top-right-radius: 50px;
      border-top-left-radius: 50px;
      h1 {
        font-size: 18px;
        align-self: center;
      }
    }
    .counter {
      display: flex;
      margin: 30px 0px;
      .count-container {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .count {
          background: ${SecondaryColor};
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-content: center;
          padding: 10px;
          border-radius: 8px;

          h1 {
            font-size: 30px;
          }
        }
        h3 {
          font-size: 14px;
          margin-top: 5px;
        }
        @media screen and (max-width: 900px) {
          padding: 0;
        }
      }
      @media screen and (max-width: 900px) {
        width: 100%;
        padding: 20px;
        justify-content: space-evenly;
        flex-wrap: wrap;
      }
    }
    .buttons {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 10px;

      a {
        font-size: 12px;
      }
      ${Secondary} {
        margin: 0px;
      }
      @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        ${Secondary} {
          margin-top: 20px;
        }
      }
    }
  }
`;

export default FooterWrapper;
