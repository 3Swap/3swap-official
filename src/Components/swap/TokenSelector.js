import React from 'react';
import { ListBoxWrapper, Overlay } from '../../Styles/Swap.style';

const TokenSelector = ({ open, children }) => {
  return (
    <>
      {open && (
        <Overlay>
          <ListBoxWrapper>{children}</ListBoxWrapper>
        </Overlay>
      )}
    </>
  );
};

export default TokenSelector;
