import styled from 'styled-components';

const TokenomicsWrapper = styled.div`
  display: flex;
  padding: 80px 0px;
  .tokenomicsInfo {
    width: 100%;
    display: flex;

    .tokenomics-dataset {
      flex: 0.5;
      .tokenomics-header {
        margin-bottom: 20px;

        h1 {
          font-size: 30px;
          font-weight: 800;

          @media screen and (max-width: 900px) {
            font-size: 35px;
          }
        }
        p {
          padding-left: 5px;
          font-weight: 400;
        }
      }
      .tokenomics-data {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        span {
          display: flex;

          &:last-child {
            font-size: 16px;
            font-weight: 700;
          }
        }
        svg {
          width: 30px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }
    .tokenomics-chart {
      flex: 0.5;
      margin-right: 50px;
      margin-top: 20px;

      @media screen and (max-width: 900px) {
        width: 100%;
        margin-right: 0px;

        .chart-container {
          svg {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }
        }
      }
    }
    @media screen and (max-width: 900px) {
      padding: 0px 30px;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 900px) {
    padding: 40px 0px;
  }
`;

export default TokenomicsWrapper;
