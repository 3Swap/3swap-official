import AboutWrapper from '../Styles/About.style';
import { Container } from '../Styles/Nav.style';

function About() {
  return (
    <AboutWrapper>
      <Container>
        <div className="about-container">
          <h4> About us</h4>
          <h1>We are the dex swap of the future.</h1>
          <p>
            3Swap Is A Decentralized Exchange Built On Various EVM-Compatible
            Chains That Allows Users To Swap Two Tokens For One With Little Or
            No Fees. Asides From The Perk Of Swapping Two Tokens For One, 3Swap
            Allows Liquidity Providers To Earn More By Allowing The Provision Of
            Liquidity For Three Tokens.
          </p>
        </div>
      </Container>
    </AboutWrapper>
  );
}

export default About;
