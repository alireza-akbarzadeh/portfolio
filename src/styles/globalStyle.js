import { createGlobalStyle } from "styled-components/macro";
import { css } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

:root {
    --font-base: "DM Sans", sans-serif;
    --primary-color: #edf2f8;
    --secondary-color: #313bac;
    --black-color: #030303;
    --lightGray-color: #e4e4e4;
    --gray-color: #6b7688;
    --brown-color: #46364a;
    --white-color: #ffffff;
}

*, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
}
.app {
  background-color: var(--primary-color);
  font-family: var(--font-base);
}

.app__whitebg {
    background: ${({ theme }) => theme.colors.primarySection};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    color: ${({ theme }) => theme.colors.text};
}

.app__primarybg {
  background: ${({ theme }) => theme.colors.SecondarySection};
  transition: background 0.2s ease-in, color 0.2s ease-in;
  color: ${({ theme }) => theme.colors.text};
}

.app__container {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
}

.app__flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__wrapper {
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 4rem 2rem;

  @media screen and (max-width: 450px) {
    padding: 4rem 1rem 2rem;
  }
}

.copyright {
  width: 100%;
  padding: 2rem 0 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};

  }
}

.head-text {
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;

  span {
    color: var(--secondary-color);
  }

  @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
}

.p-text {
  font-size: 0.8rem;
  text-align: left;
  color: var(--gray-color);
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
}

.bold-text {
  font-size: 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
}

.app__social {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

 a {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primarySection};
    margin: 0.25rem 0;
    border: 2px solid ${({ theme }) => theme.colors.SecondarySection};;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease-in-out;

    svg {
      width: 15px;
      height: 15px;
      color: var(--gray-color);
    }

    &:hover {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);

      svg {
        color: var(--white-color);
      }
    }

    @media screen and (min-width: 2000px) {
      width: 70px;
      height: 70px;

      margin: 0.5rem 0;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.app__navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem;

  .app__navigation-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #cbcbcb;
    margin: 0.5rem;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--secondary-color);
    }

    @media screen and (min-width: 2000px) {
      width: 20px;
      height: 20px;
    }
  }
}

@media screen and (max-width: 500px) {
  .app__navigation,
  .app__social {
    display: none;
  }

  .copyright {
    padding: 2rem;
  }
}

${[5, 10, 15, 20].map(
  (size) => css`
    ${["top", "right", "bottom", "left"].map(
      (dir) => css`
      .m${dir[0]}-${size}{
        margin-${dir}: ${size}px;
      }
    `
    )}
  `
)}

${[5, 10, 15, 20].map(
  (size) => css`
    ${["top", "right", "bottom", "left"].map(
      (dir) => css`
      .p${dir[0]}-${size}{
        padding-${dir}: ${size}px;
      }
    `
    )}
  `
)};

`;

export default GlobalStyle;
