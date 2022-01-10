import { Container } from '../Styles/Nav.style';
import TokenomicsWrapper from '../Styles/Tokenomics.style';

function Tokenomics() {
  return (
    <TokenomicsWrapper>
      <Container>
        <div className="tokenomicsInfo">
          <div className="tokenomics-dataset">
            <div className="tokenomics-header">
              <h1>Tokenomics</h1>
              <p>
                3Swap (SAP) <br /> Total supply: 1,000,000,000 SAP
              </p>
            </div>
            <div className="tokenomics-data">
              <span className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="15" fill="#fce8a5" />
                </svg>
              </span>
              <span>Presale.</span>
            </div>
            <div className="tokenomics-data">
              <span className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="15" fill="#fcbca5" />
                </svg>
              </span>
              <span>Liquidity vesting.</span>
            </div>
            <div className="tokenomics-data">
              <span className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="15" fill="#B9FCA5" />
                </svg>
              </span>
              <span>Team and advisors.</span>
            </div>
            <div className="tokenomics-data">
              <span className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="15" fill="#FCA5EA" />
                </svg>
              </span>
              <span>Public Sale.</span>
            </div>
            <div className="tokenomics-data">
              <span className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="15" fill="#A5FCFC" />
                </svg>
              </span>
              <span>Community incentives.</span>
            </div>
            <div className="tokenomics-data">
              <span className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="15" fill="#BFA5FC" />
                </svg>
              </span>
              <span>Ecosystem development reserve and marketing.</span>
            </div>
          </div>
          <div className="tokenomics-chart">
            <div className="chart-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="chart"
                viewBox="0 0 859 431"
              >
                <g id="BarCharts" transform="translate(-797 -2068)">
                  <g transform="translate(943 2068)">
                    <rect width="129" height="431" fill="#f2f2f2" />
                    <rect
                      width="129"
                      height="141"
                      transform="translate(0 290)"
                      fill="#fcbca5"
                    />
                  </g>
                  <g transform="translate(797 2068)">
                    <rect width="129" height="431" fill="#f2f2f2" />
                    <rect
                      width="129"
                      height="39"
                      transform="translate(0 392)"
                      fill="#fce8a5"
                    />
                  </g>
                  <g transform="translate(1089 2068)">
                    <rect width="129" height="431" fill="#f2f2f2" />
                    <rect
                      id="Rectangle_6"
                      data-name="Rectangle 6"
                      width="129"
                      height="39"
                      transform="translate(0 392)"
                      fill="#b9fca5"
                    />
                  </g>
                  <g transform="translate(1235 2068)">
                    <rect width="129" height="431" fill="#f2f2f2" />
                    <rect
                      width="129"
                      height="141"
                      transform="translate(0 290)"
                      fill="#bfa5fc"
                    />
                  </g>
                  <g transform="translate(1381 2068)">
                    <rect width="129" height="431" fill="#f2f2f2" />
                    <rect
                      id="Rectangle_11"
                      data-name="Rectangle 11"
                      width="129"
                      height="39"
                      transform="translate(0 392)"
                      fill="#fca5ea"
                    />
                  </g>
                  <g transform="translate(1527 2068)">
                    <rect width="129" height="431" fill="#f2f2f2" />
                    <rect
                      width="129"
                      height="39"
                      transform="translate(0 392)"
                      fill="#a5fcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </TokenomicsWrapper>
  );
}

export default Tokenomics;
