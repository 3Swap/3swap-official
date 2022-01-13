import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from 'react-icons/fi';

import { closeModal } from '../../redux/toggleSlice';
import { Background, ModalWrapper } from '../../Styles/Nav.style';
import { ModalContent, ModalHeader } from '../../Styles/Modal.style';
import Input from '../InputField';
import Button from '../Button';

const BuyNow = () => {
  const [amount, setAmount] = useState('0');
  const { showModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const restrictCharacter = () => {
    let tf = document.getElementById('amount');
    let rx = new RegExp();
    rx = /[^.0-9]/gi;
    tf.value = tf.value.replace(rx, '');
  };
  return (
    <>
      {showModal && (
        // console.log('yes')
        <Background>
          <ModalWrapper showModal={showModal} mxWidth="sm">
            <ModalHeader>
              <div className="heading">
                <h2>&nbsp;</h2>
              </div>
              <div className="modalCloseBtn" onClick={handleCloseModal}>
                <FiX />
              </div>
            </ModalHeader>
            <ModalContent>
              <div className="walletWrapper">
                <div className="price-heading">Enter Amount (USD)</div>
                <Input
                  type="number"
                  placeholder="Enter Amount"
                  min="0"
                  onChange={(e) => setAmount(e.target.value.slice(0, 10))}
                  value={amount}
                  name="amount"
                  id="amount"
                  autoComplete="off"
                  onKeyUp={restrictCharacter}
                />
              </div>
              <div className="priceDetails">
                <div className="priceInfo">
                  <div className="heading">Amount (BNB):</div>
                  <div className="heading">0.000</div>
                </div>
                <div className="priceInfo">
                  <div className="heading">Amount to receive (SAP):</div>
                  <div className="heading">0.000</div>
                </div>
              </div>
              <div className="buyNowBtn">
                <Button
                  label="Buy Now"
                  bgColor="var(--bg-primary)"
                  textColor="#fff"
                  hoverBg="var(--bg-primary-light)"
                  hoverColor="var(--text-white)"
                />
              </div>
            </ModalContent>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default BuyNow;
