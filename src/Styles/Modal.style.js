import styled from 'styled-components';

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .heading {
    h2 {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .modalCloseBtn {
    color: #333;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;

    &:hover {
      color: var(--bg-primary);
    }
  }
`;
export const ModalContent = styled.div`
  width: 100%;

  .wallet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #eee;
    padding: 8px;
    margin-bottom: 10px;
    .wallet-logo {
      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
    }
    .wallet-name {
      font-size: 16px;
      font-weight: normal;
    }
  }
  .termsContainer {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #eee;
    margin-bottom: 10px;

    p {
      font-size: 12px;
      color: #000;
      text-align: left;
    }
  }
  .price-heading {
    font-size: 13px;
    margin-bottom: 10px;
  }
  .priceDetails {
    padding: 20px 0px;

    .priceInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .heading {
        font-size: 13px;

        &:last-child {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
      }
    }
  }
`;

export const ModalLink = styled.a`
  &:hover {
    color: var(--bg-primary);
  }
`;

export const Button = styled.button`
  background: ${({ bgColor }) => bgColor || ''};
  color: ${({ textColor }) => textColor || 'var(--bg-one)'};
  margin-right: 10px;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  font-weight: 500;
  transition: all 300ms ease-out;
  > .icon {
    font-size: 24px;
    padding-right: 5px;
  }

  &:hover {
    transition: all 300ms ease-out;
    background: ${({ hoverBg }) => hoverBg || ''};
    color: ${({ hoverColor }) => hoverColor || 'var(--bg-one)'};
  }
`;
