import styled from "styled-components";

const SkillContainer = styled.div`
  .app__skills {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }

  .app__skills-container {
    width: 80%;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 900px) {
      width: 100%;
      flex-direction: column;
    }
  }

  .app--skills-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 5rem;
    @media screen and (max-width: 900px) {
      margin-right: 0;
      justify-content: center;
      align-items: center;
    }
  }

  .app__skills-item {
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    transition: all 0.3s ease-in-out;

    div {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: #fff;

      img {
        width: 50%;
        height: 50%;
      }

      &:hover {
        box-shadow: 0 0 25px #fef4f5;
      }

      @media screen and (min-width: 2000px) {
        width: 150px;
        height: 150px;
      }
      @media screen and (max-width: 900px) {
        width: 70px;
        height: 70px;
      }
    }

    p {
      font-weight: 500;
      margin-top: 0.5rem;
    }

    @media screen and (min-width: 2000px) {
      margin: 1rem 2rem;
      p {
        margin-top: 1rem;
      }
    }
  }

  .app__skills-exp {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    cursor: pointer;
    margin-top: 1rem;

    @media screen and (max-width: 900px) {
      margin-top: 2rem;
    }

    h4 {
      font-weight: 500;
    }

    p {
      font-weight: 400;
      color: var(--gray-color);
      margin-top: 5px;
    }

    .app__exp-years {
      margin-right: 3rem;
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 1.2rem;
    }
    @media screen and (max-width: 450px) {
      margin-right: 1rem;
    }
  }

  .skills-tooltip {
    max-width: 300px !important;
    background-color: var(--white-color) !important;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
    border-radius: 5px !important;
    padding: 1rem !important;
    color: var(--gray-color) !important;
    text-align: center !important;
    line-height: 1.5 !important;
    opacity: 1 !important;
    @media screen and (min-width: 2000px) {
      font-size: 1.75rem !important;
      max-width: 500px !important;
      line-height: 2 !important;
    }
  }
`;
export { SkillContainer };
