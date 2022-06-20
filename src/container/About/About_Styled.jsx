import styled from "styled-components";

const AboutContainer = styled.div`
  .app__about {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }

  .app__profile {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    margin-top: 5rem;
    gap: 15px;
    @media screen and(max-width: 800px) {
      flex-direction: column;
    }

    .Hobbies_head {
      margin: 25px 0;
    }
  }

  .app__col {
    flex: 1 1 0;
  }

  .app__profile--info {
    display: inline-flex;
    margin-top: 38px;
    gap: 15px;
    flex-direction: column;
    list-style-type: none;

    li div {
      .value {
        color: #313bac;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }

  .app__profile-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 2rem;

    .about_text {
      font-size: 19px;
      line-height: 2.2;
      text-transform: capitalize;
    }

    @media screen and(min-width: 2000px) {
      width: 370px;
      margin: 2rem 4rem;
      img {
        height: 320px;
      }
    }
  }
`;

export { AboutContainer };
