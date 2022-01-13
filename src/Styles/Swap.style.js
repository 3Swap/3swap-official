import styled from 'styled-components';

export const ListBoxContainer = styled.div`
  width: 100%;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ListBoxWrapper = styled.div`
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 20px;
  background: #fff;
`;

export const SwapWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #ddd;
  height: 100vh;
  flex-direction: column;
`;
export const SwapHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  margin-bottom: 80px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  .logo {
    img {
      width: 100%;
      height: 40px;
      object-fit: contain;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 20px 0 50px 0;
    padding-left: 10px;
    padding-right: 30px;
  }
`;

export const Swapdemo = styled.div`
  width: 100%;
  display: flex;

  .wrapper {
    width: 600px;
    margin: 0px auto;
    background: #fff;
    border-radius: 20px;
    padding: 40px 30px;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      font-size: 20px;
      padding-top: 10px;
    }
  }
  .swapheading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
      font-size: 20px;
    }
    .setting {
      font-size: 20px;
    }
  }
  .swapInputWrapper {
    background: #eee;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    input {
      flex: 1;
    }
    .btn {
      flex: 0.2;
      background: var(--bg-primary-light);
      color: #fff;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      padding: 8px 10px;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
  .last {
    margin-top: 30px;
  }
  .footer {
    width: 100%;
    margin-top: 30px;
    button {
      width: 100%;
    }
  }
  ul {
    list-style-type: none;
  }
  .options {
    color: var(--bg-primary);
    font-weight: 800;
    width: 100%;
    text-align: left;
    display: flex;
    padding: 10px;
    margin: 8px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all 300ms ease-out;
    align-items: center;

    &:hover {
      border: 1px solid var(--bg-primary);
      color: var(--bg-primary-light);
      transition: all 300ms ease-out;
    }
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }
`;
