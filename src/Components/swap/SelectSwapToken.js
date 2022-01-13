import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import TokenSelector from './TokenSelector';
import { TokenList } from '../../Assets/TokenList.data';

const SelectSwapToken = () => {
  const [selected, setSelected] = useState('SELECT');
  const [optionSelected, setOptionSelected] = useState(false);

  return (
    <>
      <Listbox value={selected} onChange={setSelected} className="select">
        {({ open }) => (
          <>
            <Listbox.Button className="btn">{selected}</Listbox.Button>
            <TokenSelector open={open}>
              <Listbox.Options>
                {TokenList.map((token, i) => (
                  <Listbox.Option key={i} value={token.name}>
                    <button
                      onClick={() => {
                        setOptionSelected(!optionSelected);
                      }}
                      className="options"
                    >
                      <img src={token.logo} alt="" />{' '}
                      {`${token.name}`.toUpperCase()}
                    </button>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </TokenSelector>
          </>
        )}
      </Listbox>
    </>
  );
};

export default SelectSwapToken;
