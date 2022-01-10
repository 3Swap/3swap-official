import {
  CardArrowIcon,
  FlexibilityIcon,
  LowCostIcon,
  RewardIcon,
} from '../Assets/Utility';
import { Primary } from '../Styles/Buttons.style';
import { Container } from '../Styles/Nav.style';
import WhyWrapper from '../Styles/Why.style';

function Why() {
  return (
    <WhyWrapper>
      <Container>
        <div className="why-content">
          <h1>Why invest in 3swap</h1>
          <p>
            We Are Introducing A New Paradigm In The Decentralized Finance
            Space.
          </p>
          <Primary>
            <a href="/">Read whitePaper</a>
          </Primary>
        </div>
        <div className="why-cards">
          <div className="card">
            <div className="heading">
              <div>
                <img src={FlexibilityIcon} alt="" />
              </div>
              <h3>Flexibility</h3>
            </div>
            <p>Swap Two Tokens For One Across Various EVM-Compatible Chains.</p>
            <img src={CardArrowIcon} alt="" className="card-arrow" />
          </div>
          <div className="card">
            <div className="heading">
              <div>
                <img src={LowCostIcon} alt="" />
              </div>
              <h3>Low cost</h3>
            </div>
            <p>
              3swap Aims To Be Financially Conducive And/Or Appealing By
              Allowing You To Pay Less For Swaps Executed.
            </p>
            <img src={CardArrowIcon} alt="" className="card-arrow" />
          </div>
          <div className="card">
            <div className="heading">
              <div>
                <img src={RewardIcon} alt="" />
              </div>
              <h3>More rewards</h3>
            </div>
            <p>
              3swap Aims To Offer More Value For The Provision Of Liquidity
              Across Three Tokens.
            </p>
            <img src={CardArrowIcon} alt="" className="card-arrow" />
          </div>
        </div>
      </Container>
    </WhyWrapper>
  );
}

export default Why;
