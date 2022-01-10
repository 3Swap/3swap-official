import { Container } from '../Styles/Nav.style';
import RoadMapWrapper from '../Styles/RoadMap.style';

function RoadMap() {
  return (
    <RoadMapWrapper>
      <Container>
        <h1>Preliminary Roadmap</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1503 32">
          <g id="Group_3" data-name="Group 3" transform="translate(-298 -2736)">
            <rect
              id="Rectangle_16"
              data-name="Rectangle 16"
              width="300"
              height="1"
              transform="translate(307 2752)"
            />
            <rect
              id="Rectangle_17"
              data-name="Rectangle 17"
              width="300"
              height="1"
              transform="translate(609 2754)"
            />
            <rect
              id="Rectangle_18"
              data-name="Rectangle 18"
              width="300"
              height="1"
              transform="translate(900 2753)"
            />
            <rect
              id="Rectangle_19"
              data-name="Rectangle 19"
              width="300"
              height="1"
              transform="translate(1200 2752)"
            />
            <rect
              id="Rectangle_20"
              data-name="Rectangle 20"
              width="300"
              height="1"
              transform="translate(1501 2752)"
            />
            <circle
              id="Ellipse_7"
              data-name="Ellipse 7"
              cx="15"
              cy="15"
              r="15"
              transform="translate(298 2736)"
              fill="#fce8a5"
            />
            <circle
              id="Ellipse_8"
              data-name="Ellipse 8"
              cx="15"
              cy="15"
              r="15"
              transform="translate(600 2738)"
              fill="#4500a0"
            />
            <circle
              id="Ellipse_9"
              data-name="Ellipse 9"
              cx="15"
              cy="15"
              r="15"
              transform="translate(891 2737)"
              fill="#4500a0"
            />
            <circle
              id="Ellipse_10"
              data-name="Ellipse 10"
              cx="15"
              cy="15"
              r="15"
              transform="translate(1191 2736)"
              fill="#4500a0"
            />
            <circle
              id="Ellipse_11"
              data-name="Ellipse 11"
              cx="15"
              cy="15"
              r="15"
              transform="translate(1492 2736)"
              fill="#4500a0"
            />
          </g>
        </svg>
        <div className="roadmap-content">
          <div className="content-container">
            <h3 className="special">Phase 1</h3>
            <p>Team building and whitepaper creation</p>
          </div>
          <div className="content-container">
            <h3>Phase 2</h3>
            <p>Airdrop and Token sales </p>
          </div>
          <div className="content-container">
            <h3>Phase 3</h3>
            <p>
              3swap Decentralized Exchange Development. 3swap NFT Deployment
            </p>
          </div>
          <div className="content-container">
            <h3>Phase 4</h3>
            <p>swap Governance 3swap Farming</p>
          </div>
          <div className="content-container">
            <h3>Phase 5</h3>
            <p>3swap Metaverse and Further development </p>
          </div>
        </div>
      </Container>
    </RoadMapWrapper>
  );
}

export default RoadMap;
