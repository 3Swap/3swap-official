import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from 'react-icons/fi';

import { closeConnectWalletModal } from '../../redux/toggleSlice';
import { Background, ModalWrapper } from '../../Styles/Nav.style';
import { ModalContent, ModalHeader, ModalLink } from '../../Styles/Modal.style';

const ConnectWallet = () => {
  const { showWalletModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeConnectWalletModal());
  };
  return (
    <>
      {showWalletModal && (
        // console.log('yes')
        <Background onClick={handleCloseModal}>
          <ModalWrapper showWalletModal={showWalletModal} mxWidth="sm">
            <ModalHeader>
              <div className="heading">
                <h2>Connect a Wallet</h2>
              </div>
              <div className="modalCloseBtn" onClick={handleCloseModal}>
                <FiX />
              </div>
            </ModalHeader>
            <ModalContent>
              <div className="walletWrapper">
                <div className="termsContainer">
                  <p>
                    By connecting a wallet, you agree to 3swap's{' '}
                    <ModalLink href="/">Terms of Service</ModalLink> and
                    acknowledge that you have read and understand the{' '}
                    <ModalLink href="">3swap's Protocol Disclaimer</ModalLink>.
                  </p>
                </div>
                <ModalLink href="/">
                  <div className="wallet">
                    <div className="wallet-name">Metamask</div>
                    <div className="wallet-logo">
                      <img
                        src="https://app.uniswap.org/static/media/metamask.02e3ec27.png"
                        alt=""
                      />
                    </div>
                  </div>
                </ModalLink>
                <ModalLink href="/">
                  <div className="wallet">
                    <div className="wallet-name">Trust Wallet</div>
                    <div className="wallet-logo">
                      <img
                        src="https://bitcourier.co.uk/assets/coins/large/trust-wallet-token.png"
                        alt=""
                      />
                    </div>
                  </div>
                </ModalLink>
              </div>
            </ModalContent>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default ConnectWallet;
