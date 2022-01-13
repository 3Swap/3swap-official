import styled from 'styled-components';

const TeamWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0px;

  .team {
    width: 100%;

    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 40px;
      font-weight: 800;
    }
  }
  .team-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 40px;

    @media (max-width: 900px) {
      flex-direction: column;
    }
    .team-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 900px) {
        margin-top: 30px;
      }
      h1 {
        font-size: 18px;
        font-weight: 800;
      }
      h3 {
        color: var(--bg-primary);
        font-size: 14px;
      }
      .avatar {
        width: 250px;
        height: 250px;
        margin-bottom: 20px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
`;

export default TeamWrapper;
