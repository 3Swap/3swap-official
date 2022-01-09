import styled from 'styled-components';

const RoadMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  svg {
    width: 85%;
  }
  .roadmap-content {
    display: flex;
    margin-top: 20px;
    width: 85%;
    .content-container {
      margin-left: 10px;
      p {
        width: 200px;
        font-size: 16px;
      }
      :nth-child(1) {
        margin-left: 20px;
      }
    }
  }
`;

export default RoadMapWrapper;
