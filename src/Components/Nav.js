import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { Logo, Navigation } from '../Assets/Utility';
import { Primary } from '../Styles/Buttons.style';
import { NavItem, NavLinks, NavMenu, NavWrapper } from '../Styles/Nav.style';
import BuyNow from './modal/BuyNow';
import ConnectWallet from './modal/ConnectWallet';
import { openConnectWalletModal } from '../redux/toggleSlice';

function Nav() {
  const [clicked, setClicked] = useState(false);
  const { showModal, showWalletModal } = useSelector((state) => state.modal);
  const handleClick = () => setClicked(!clicked);
  const dispatch = useDispatch();

  const handleConnectWallet = () => {
    dispatch(openConnectWalletModal());
  };
  return (
    <>
      <BuyNow open={showModal} />
      <ConnectWallet open={showWalletModal} />
      <NavWrapper>
        <div className="nav-wrapper">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navigation">
            <div className="nav-items">
              {Navigation.map(({ path, label }, i) => (
                <NavLinks to={path} onClick={handleClick} key={i}>
                  {label}
                </NavLinks>
              ))}
              {/* <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Tokenomics">Tokenomics</a>
            <a href="#Roadmap">Roadmap</a>
            <a href="#Features">Features</a>
            <a href="#ICO">ICO</a>
            <a href="#Team">Team</a> */}
              <Primary>
                <button onClick={handleConnectWallet}>Connect wallet</button>
              </Primary>
            </div>
            <div id="Hamburger" onClick={handleClick}>
              {clicked ? (
                <div className="faBars">
                  <FaTimes className="icon" />
                </div>
              ) : (
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
              )}
            </div>
            <NavMenu onClick={handleClick} clicked={clicked}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              {Navigation.map(({ label, path }, i) => (
                <NavItem key={i}>
                  <NavLinks
                    to={path}
                    smooth={true}
                    duration={300}
                    spy={true}
                    exact="true"
                    onClick={handleClick}
                  >
                    {label}
                  </NavLinks>
                </NavItem>
              ))}
              <Primary>
                <button onClick={handleConnectWallet}>Connect wallet</button>
              </Primary>
            </NavMenu>
          </div>
        </div>
      </NavWrapper>
    </>
  );
}

export default Nav;
