import styled from "styled-components";
const NavbarContainer = styled.div`
  .app__navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: ${({ theme }) => theme.colors.navbarBG};
    backdrop-filter: ${({ theme }) => theme.colors.navbarBlur};
    -webkit-backdrop-filter: ${({ theme }) => theme.colors.navbarBlur};
    border: 1px solid ${({ theme }) => theme.colors.borderNavbar};
    position: fixed;
    z-index: 2;
  }

  .app__navbar-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > img {
      width: 90px;
      height: 20px;

      @media screen and (min-width: 2000px) {
        width: 180px;
        height: 40px;
      }
    }
  }

  .app__navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      margin: 0 1rem;
      cursor: pointer;
      flex-direction: column;

      div {
        width: 5px;
        height: 5px;
        background: transparent;
        border-radius: 50%;
        margin-bottom: 5px;
      }

      a {
        color: var(--gray-color);
        text-decoration: none;
        flex-direction: column;
        text-transform: uppercase;
        font-weight: 500;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--secondary-color);
        }
      }

      &:hover {
        div {
          background-color: var(--secondary-color);
        }
      }
    }

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .app__header-download {
    cursor: pointer;
    position: relative;
    @media screen and (max-width: 900px) {
      display: none;
    }

    &:hover .tooltip {
      display: block;
    }
  }

  .app__navbar-menu {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    background: var(--secondary-color);
    @media screen and (min-width: 900px) {
      display: none;
    }

    svg {
      width: 70%;
      height: 70%;
      color: var(--white-color);
    }

    div {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      padding: 1rem;
      width: 80%;
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      background-color: var(--white-color);
      background: url("../../assets/images/bgIMG.png");
      background-size: cover;
      background-repeat: no-repeat;
      box-shadow: 0 0 2px rgba(168, 168, 168, 0.15);

      svg {
        width: 35px;
        height: 35px;
        color: var(--secondary-color);
        margin: 0.5rem 1rem;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        li {
          margin: 1rem;

          a {
            color: var(--gray-color);
            text-decoration: none;
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 600;
            transition: all 0.3s ease-in-out;

            &:hover {
              color: var(--secondary-color);
            }
          }
        }

        @media screen and (min-width: 900px) {
          display: none;
        }
      }
    }
  }

  .logo__Name-ALireza {
    span {
      color: #313bac;
    }

    font-size: 1.6rem;
    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;
export { NavbarContainer };
