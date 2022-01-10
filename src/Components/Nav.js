import { Logo } from '../Assets/Utility';
import { Primary } from '../Styles/Buttons.style';
import { Container, NavWrapper } from '../Styles/Nav.style';

function Nav() {
  return (
    <NavWrapper>
      <Container>
        <div className="nav-wrapper">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navigation">
            <div className="nav-items">
              <a href="#Home">Home</a>
              <a href="#About">About</a>
              <a href="#Tokenomics">Tokenomics</a>
              <a href="#Roadmap">Roadmap</a>
              <a href="#Features">Features</a>
              <a href="#ICO">ICO</a>
              <a href="#Team">Team</a>
              <Primary>
                <button>Connect wallet</button>
              </Primary>
            </div>
            <div id="Hamburger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
              >
                <circle cx="23" cy="23" r="23" fill="#6e00ff" />
                <rect
                  width="23"
                  height="4"
                  transform="translate(12 17)"
                  fill="#fff"
                />
                <rect
                  width="23"
                  height="4"
                  transform="translate(12 25)"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </NavWrapper>
  );
}

export default Nav;
