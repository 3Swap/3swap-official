import AboutWrapper from '../Styles/About.style';
import { Container } from '../Styles/Nav.style';

function About() {
  return (
    <AboutWrapper id="about">
      <Container>
        <div className="about-container">
          <h4> About us</h4>
          <h1>We are the dex swap of the future.</h1>
          <p>
            3Swap is a Decentralized Exchange built on various EVM-Compatible
            Chains that allows users to swap two tokens for one with little or
            no fees. asides from the perk of swapping two tokens for one, 3Swap
            allows Liquidity providers to earn more by allowing the provision of
            Liquidity for three tokens.
          </p>
        </div>
      </Container>
    </AboutWrapper>
  );
}

export default About;
