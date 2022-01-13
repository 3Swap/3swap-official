import {
  Coins,
  Hagglex,
  HeroArrow,
  HeroImg,
  Tatswap,
  Vefi,
} from '../Assets/Utility';
import { Primary } from '../Styles/Buttons.style';
import HeroWrapper from '../Styles/Hero.style';
import { Container, NavLink } from '../Styles/Nav.style';
import Button from './Button';

function Hero() {
  return (
    <HeroWrapper>
      <Container>
        <div className="cta-wrapper">
          <div className="cta-wrapper-left">
            <h1>
              Decentralized Exchange With Extra Powers. Swap Two Tokens For One.
            </h1>
            <div className="hero-container">
              <div className="hero-arrow">
                <img src={HeroArrow} alt="" />
              </div>
              <div className="cta-container">
                <p>
                  Swap tokens the way of the future, one click, more swaps, less
                  fees
                </p>
                <Primary>
                  <NavLink to="/demo" className="btn">
                    Demo App
                  </NavLink>
                </Primary>
              </div>
            </div>
          </div>
          <div className="cta-wrapper-right">
            <img src={HeroImg} alt="" className="hero-img" />
            <img src={Coins} alt="" className="mobile-hero-img" />
          </div>
        </div>
      </Container>
      <div className="cta-supported-by">
        <Container>
          <div className="sponsors">
            <h3>Supported by</h3>
            <div className="logo-container">
              <img src={Vefi} alt="" />
              <img src={Hagglex} alt="" />
              <img src={Tatswap} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </HeroWrapper>
  );
}

export default Hero;
