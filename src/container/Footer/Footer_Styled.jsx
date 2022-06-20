import styled from "styled-components";
const AboutContainer = styled.div`
  width: 100%;
  .app__footer {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }

  .app__footer-cards {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap-reverse;
    margin: 4rem 2rem 2rem;

    .app__footer-card {
      min-width: 290px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 1rem 0;
      padding: 1rem;
      border-radius: 10px;
      background-color: #fef4f5;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      img {
        height: 40px;
        width: 40px;
        margin: 0 0.7rem;
      }

      p {
        font-weight: 600;
      }

      a {
        text-decoration: none;
        font-weight: 500;
      }

      &:hover {
        box-shadow: 0 0 25px #fef4f5;
      }

      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .app__footer-cards .app__footer-card:last-child {
    background-color: #f2f7fe;
  }

  .app__footer-form {
    width: 60%;
    flex-direction: column;
    margin: 1rem 2rem;

    div {
      width: 100%;
      margin: 0.75rem 0;
      border-radius: 10px;
      cursor: pointer;
      background-color: var(--primary-color);
      transition: all 0.3s ease-in-out;

      input,
      textarea {
        width: 100%;
        padding: 0.95rem;
        border: none;
        border-right: 7px;
        background-color: var(--primary-color);
        font-family: var(--font-base);
        color: var(--secondary-color);

        &:focus {
          outline: none;
        }

        &:hover {
          box-shadow: 0 0 25px var(--primary-color);
        }
      }
    }

    button {
      padding: 1rem 2rem;
      border-radius: 10px;
      border: none;
      background: var(--secondary-color);
      font-weight: 500;
      color: var(--white-color);
      cursor: pointer;
      outline: none;
      margin: 2rem 0 0 0;
      font-family: var(--font-base);
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 1rem 0;
    }
  }
`;
export { AboutContainer };
