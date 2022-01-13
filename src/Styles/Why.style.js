import styled from 'styled-components';
import { Primary } from './Buttons.style';

const WhyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0px 170px 0px;

  @media screen and (max-width: 900px) {
    padding: 70px 20px;
  }
  .why-content {
    width: 400px;
    h1 {
      font-size: 30px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 20px;
      margin-left: 5px;
    }
    ${Primary} {
      font-size: 12px;
      margin-left: 4px;
      margin-bottom: 40px;
    }
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  .why-cards {
    display: flex;
    margin-top: 35px;
    justify-content: center;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 27%;
      height: 350px;
      background: #ffe4f5;
      padding: 30px 20px;
      border-radius: 8px;
      position: relative;
      margin-left: 25px;
      @media screen and (max-width: 900px) {
        width: 100%;
        margin-top: 20px;
        height: 300px;
        margin-left: 0px;
      }
      .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 50px;
        }
      }
      p {
        font-size: 14px;
        text-align: center;
        font-weight: 400;
        margin-top: 20px;
      }
      .card-arrow {
        position: absolute;
        align-self: flex-end;
        object-fit: contain;
        width: 35px;
        top: 85%;
      }
      :nth-child(2) {
        background: #e4d0ff;
      }
      :nth-child(3) {
        background: #fff8e2;
      }
    }
  }
`;
export default WhyWrapper;
