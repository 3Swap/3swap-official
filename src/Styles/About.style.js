import styled from 'styled-components';
import { PrimaryColor, SplashColor } from '../Assets/Utility';

const AboutWrapper = styled.div`
  padding: 20px;
  padding-bottom: 80px;
  background: ${PrimaryColor};
  .about-container {
    margin-top: 60px;
    @media screen and (max-width: 900px) {
      width: 100%;
      margin-top: 0px;
      padding: 30px 20px;
    }

    h4 {
      color: ${SplashColor};
    }
    h1 {
      color: white;
      font-size: 60px;
      line-height: 4.4rem;
      font-weight: 800;
      max-width: 18ch;
      @media screen and (max-width: 900px) {
        width: 100%;
        font-size: 32px;
        line-height: 45px;
        margin-bottom: 10px;
      }
    }
    p {
      font-size: 16px;
      width: 90%;
      margin-left: 8px;
      font-weight: 400;
      color: #dedede;
      @media screen and (max-width: 900px) {
        line-height: 30px;
        width: 100%;
        margin-left: 0;
        font-size: 14px;
      }
    }
  }
`;

export default AboutWrapper;
