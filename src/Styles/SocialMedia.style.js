import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
  display: flex;
  padding: 50px 20px 80px 20px;
  background: var(--bg-primary);
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column;
    align-content: center;
  }
  .socialMedia-wrapper {
    width: 100%;
    display: flex;
  }
  .quote-icon {
    position: absolute;
    left: 670px;
    top: -100px;
    width: 550px;
    height: 250px;
    object-fit: contain;
    @media (max-width: 900px) {
      display: none;
    }
    @media screen and (min-width: 1400px) {
      left: 870px;
    }
  }
  .social-container {
    .content-wrapper {
      padding-top: 30px;

      h1 {
        max-width: 25ch;
        font-size: 32px;
        line-height: 40px;
        color: #fff;
        font-weight: 800;
        @media (max-width: 900px) {
          width: 100%;
          font-size: 24px;
        }
      }
      p {
        font-size: 16px;
        width: 500px;
        margin: 20px 0 30px 0;
        color: #ccc;

        @media (max-width: 900px) {
          width: 100%;
        }
      }
    }

    .icon-wrapper {
      width: 600px;
      margin-top: 150px;
      flex-wrap: wrap;
      margin-left: 40px;
      @media (max-width: 900px) {
        width: 100%;
        margin-top: 50px;
      }
      @media screen and (min-width: 1400px) {
        width: 100%;
        margin-left: 100px;
      }
      a {
        padding: 10px;
        img {
          width: 30%;
          height: 50px;
          object-fit: contain;
          @media (max-width: 900px) {
            width: 40%;
          }
        }
        :nth-child(7) {
          margin-left: 30%;
        }
      }
    }
    &:first-child {
      @media screen and (min-width: 1400px) {
        h1 {
          width: 700px;
          font-size: 34px;
          line-height: 40px;
          color: #fff;
          font-weight: 800;
        }
      }
    }
  }
`;

export default SocialMediaWrapper;
