import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkScroll } from '../Assets/Utility';
export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;

  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 0px 20px;
    height: 100px;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .logo {
      flex: 0.3;
      padding-left: 80px;
      margin-right: -50px;
      height: 60px;
      display: flex;
      margin-top: 10px;
      align-items: center;
      img {
        width: 150px;
        height: 50px;
        object-fit: contain;

        @media screen and (max-width: 900px) {
          height: 130px;
          width: 150px;
        }
      }
      @media screen and (max-width: 900px) {
        flex: 1;
        padding-left: 0px;
      }
      @media (min-width: 1400px) {
      }
    }
    .navigation {
      flex: 0.6;
      height: 60px;
      display: flex;
      align-items: center;
      background: var(--bg-primary);
      border-bottom-left-radius: 80px;
      .nav-items {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        a {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }
        a:first-child {
          margin-left: 40px;
        }
        @media screen and (max-width: 900px) {
          display: none;
        }
      }
      @media screen and (max-width: 900px) {
        background: transparent;
      }
      @media screen and (max-width: 900px) {
        justify-content: flex-end;
      }
    }
    @media screen and (max-width: 900px) {
      justify-content: space-between;
      width: 100%;
      height: 100px;
      padding-top: 20px;
    }
  }
  #Hamburger {
    @media (min-width: 900px) {
      display: none;
    }
    @media screen and (max-width: 900px) {
      display: flex;
      cursor: pointer;
    }
    .faBars {
      background: var(--bg-primary);
      width: 46px;
      height: 46px;
      border-radius: 50%;

      .icon {
        font-size: 45px;
        padding: 10px;
        color: #fff;
        display: flex;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

export const NavMenu = styled.ul`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 110px;
    height: 80%;
    padding-bottom: 40px;
    align-items: center;
    justify-content: center;
    text-align: center;

    left: ${({ clicked }) => (clicked ? 0 : '-100%')};
    z-index: 10;
    transition: all 0.5s ease;
    background: var(--bg-primary);
    color: #fff;
  }
  @media screen and (max-width: 375px) {
    height: 90%;
  }
`;
export const NavItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 8px 0px;

  @media screen and (max-width: 900px) {
    margin: 5px 0px;
  }
`;
export const NavLinks = styled(LinkScroll)`
  cursor: pointer;
  @media screen and (max-width: 900px) {
    text-align: center;
    align-items: center;
    padding: 0.75rem 2rem;
    width: 100%;
    display: table;
    justify-content: center;
    color: #fff;
    font-size: 20px;
  }
`;
export const NavLink = styled(Link)``;
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
export const ModalWrapper = styled.div`
  width: 100%;
  max-width: ${(props) =>
    props.mxWidth === 'sm'
      ? '400px'
      : props.mxWidth === 'md'
      ? '600px'
      : props.mxWidth === 'lg'
      ? '800px'
      : '1000px'};
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  color: var(--bg-primary);
  position: relative;
  z-index: 3;
  padding: 20px 30px;
  border-radius: 20px;

  button {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    font-size: 16px;
    padding: 15px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
