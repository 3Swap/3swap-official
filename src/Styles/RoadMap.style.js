import styled from 'styled-components';
import { PrimaryColor } from '../Assets/Utility';

const RoadMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 900px) {
    padding: 20px;
    h1 {
      font-size: 24px;
    }
  }
  svg {
    width: 85%;
    @media (max-width: 900px) {
      display: none;
    }
  }
  .roadmap-content {
    display: flex;
    margin-top: 20px;
    width: 85%;
    @media (max-width: 900px) {
      flex-direction: column;
      width: 100%;
    }
    .content-container {
      margin-left: 10px;
      @media (max-width: 900px) {
        margin-top: 20px;
        h3 {
          color: '#4500A0';
          color: ${PrimaryColor};
        }
      }

      p {
        width: 200px;
        font-size: 16px;
        @media (max-width: 900px) {
          font-size: 20px;
          width: 80%;
        }
      }
      :nth-child(1) {
        margin-left: 20px;
        @media (max-width: 900px) {
          margin-left: unset;
        }
      }
    }
  }
`;

export default RoadMapWrapper;
