import React, { useState } from 'react';
import { Logo } from '../Assets/Utility';
import { FiArrowDownCircle, FiSettings } from 'react-icons/fi';
import { Swapdemo, SwapHeader, SwapWrapper } from '../Styles/Swap.style';
import Button from './Button';
import Input from './InputField';
import SelectSwapToken from './swap/SelectSwapToken';
import { NavLink } from '../Styles/Nav.style';

const SwapTokenDemo = () => {
  const [amountToken1, setAmountToken1] = useState(0);
  const [amountToken2, setAmountToken2] = useState(0);
  const [amountToken3, setAmountToken3] = useState(0);
  return (
    <>
      <SwapWrapper>
        <SwapHeader>
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="connectWallet">
            <Button
              label="connect wallet"
              bgColor="var(--bg-primary-light)"
              textColor="#fff"
              hoverBg="var(--bg-primary)"
              hoverColor="#fff"
            />
          </div>
        </SwapHeader>
        <Swapdemo>
          <div className="wrapper">
            <div className="swapheading">
              <div className="heading">
                <h1>Swap</h1>
              </div>
              <div className="setting">
                <FiSettings />
              </div>
            </div>
            <div className="swapInputWrapper">
              <div className="input">
                <Input
                  type="number"
                  min="0"
                  id="amount"
                  value={amountToken1}
                  onChange={(e) => setAmountToken1(e.target.vaue)}
                />
                <SelectSwapToken className="select" />
              </div>
            </div>
            <div className="swapInputWrapper">
              <div className="input">
                <Input
                  type="number"
                  min="0"
                  id="amount"
                  value={amountToken2}
                  onChange={(e) => setAmountToken2(e.target.vaue)}
                />
                <SelectSwapToken className="select" />
              </div>
            </div>
            <div className="divider">
              <FiArrowDownCircle />
            </div>
            <div className="swapInputWrapper last">
              <div className="input">
                <Input
                  type="number"
                  min="0"
                  id="amount"
                  value={amountToken3}
                  onChange={(e) => setAmountToken3(e.target.vaue)}
                />
                <SelectSwapToken className="select" />
              </div>
            </div>
            <div className="footer">
              <Button
                label="Swap"
                bgColor="var(--bg-primary-light)"
                textColor="#fff"
                hoverBg="var(--bg-primary)"
                hoverColor="#fff"
              />
            </div>
          </div>
        </Swapdemo>
      </SwapWrapper>
    </>
  );
};

export default SwapTokenDemo;
