import styled from "styled-components";
const TestimonialContainer = styled.div`
  .app__testimonial {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }

  .app__testimonial-item {
    width: 60%;
    min-height: 320px;
    background-color: var(--white-color);
    display: flex;
    flex-direction: row;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);

    transition: all 0.3s ease-in-out;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }

    @media screen and (min-width: 2000px) {
      min-height: 450px;

      img {
        width: 150px;
        height: 150px;
      }
    }

    @media screen and (max-width: 850px) {
      width: 100%;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  .app__testimonial-content {
    flex: 1;
    height: 100%;
    padding: 0 2rem;
    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    p {
      font-size: 1.25rem;
      line-height: 2rem;
      color: var(--black-color);
      font-family: var(--font-base);

      @media screen and (min-width: 2000px) {
        font-size: 2rem;
        line-height: 3.5rem;
      }
    }

    h4 {
      font-weight: 600;
      color: var(--secondary-color);
      margin-top: 2rem;
    }

    h5 {
      font-weight: 400;
      color: var(--gray-color);
      margin-top: 5px;
    }

    @media screen and (max-width: 600px) {
      margin-top: 2rem;
      padding: 0;
    }
  }

  .app__testimonial-btns {
    flex-direction: row;
    margin-top: 1rem;

    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--white-color);

      margin: 1rem;
      transition: all 0.3s ease-in-out;

      svg {
        width: 20px;
        height: 20px;
        color: var(--secondary-color);
      }

      &:hover {
        background-color: var(--secondary-color);

        svg {
          color: var(--white-color);
        }
      }

      @media screen and (min-width: 2000px) {
        width: 100px;
        height: 100px;

        svg {
          width: 45px;
          height: 45px;
        }
      }
    }
  }

  .app__testimonial-brands {
    width: 80%;
    flex-wrap: wrap;
    margin-top: 2rem;

    div {
      width: 150px;
      margin: 1.5rem;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: grayscale(1);
      }

      &:hover {
        img {
          filter: grayscale(0);
        }
      }

      @media screen and (min-width: 2000px) {
        width: 210px;
        margin: 2rem;
      }

      @media screen and (max-width: 450px) {
        width: 120px;
        margin: 1rem;
      }
    }

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
`;
export { TestimonialContainer };
