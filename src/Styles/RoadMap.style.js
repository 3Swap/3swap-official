import styled from 'styled-components';
import { PrimaryColor } from '../Assets/Utility';

const RoadMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  h1 {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 900px) {
    padding: 20px 30px;
    h1 {
      font-size: 28px;
      text-align: left;
    }
  }
  @media screen and (max-width: 375px) {
    h1 {
      font-size: 25px;
    }
  }
  svg {
    width: 90%;
    @media (max-width: 900px) {
      display: none;
    }
  }
  .roadmap-content {
    display: flex;
    margin-top: 20px;
    width: 90%;
    @media (max-width: 900px) {
      flex-direction: column;
      width: 100%;
    }
    .content-container {
      margin-left: 10px;
      @media screen and (max-width: 900px) {
        margin: 10px 0px;
        text-align: left;
        width: 100%;
        h3 {
          color: '#4500A0';
          color: ${PrimaryColor};
        }
      }

      p {
        width: 200px;
        font-size: 16px;
        @media screen and (max-width: 900px) {
          font-size: 16px;
          font-weight: 400;
          width: 100%;
        }
        @media screen and (max-width: 375px) {
          font-size: 14px;
        }
      }
      :nth-child(1) {
        margin-left: 20px;
        @media (max-width: 900px) {
          margin-left: 0px;
        }
      }
    }
  }
`;

export default RoadMapWrapper;
