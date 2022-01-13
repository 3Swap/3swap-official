import React from 'react';
import { useDispatch } from 'react-redux';
import { Primary, Secondary } from '../Styles/Buttons.style';
import FooterWrapper from '../Styles/Footer.style';
import { Container } from '../Styles/Nav.style';
import { openModal } from '../redux/toggleSlice';

function Footer() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <FooterWrapper id="ico">
      <Container>
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
            {/* <div className="count-container">
              <div className="count">
                <h1>00</h1>
              </div>
              <h3>Secs</h3>
            </div> */}
          </div>
          <div className="buttons">
            <Primary>
              <button onClick={handleOpenModal}>Participate</button>
            </Primary>
            <Secondary>
              <a href="/">Read whitepaper</a>
            </Secondary>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
