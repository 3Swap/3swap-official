import { Primary, Secondary } from '../Styles/Buttons.style';
import FooterWrapper from '../Styles/Footer.style';

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <h1>Participate in our next activity</h1>
        <p>Our airdrop is currently running</p>
        <div className="counter">
          <div className="count-container">
            <div className="count">
              <h1>1</h1>
            </div>
            <h3>Days</h3>
          </div>
          <div className="count-container">
            <div className="count">
              <h1>12</h1>
            </div>
            <h3>Hrs</h3>
          </div>
          <div className="count-container">
            <div className="count">
              <h1>34</h1>
            </div>
            <h3>Mins</h3>
          </div>
        </div>
        <Primary>
          <a href="/">Participate</a>
        </Primary>
        <Secondary>
          <a href="/">Read whitepaper</a>
        </Secondary>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
