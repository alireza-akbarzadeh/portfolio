import styled from "styled-components";
const HeaderContainer = styled.div`
  #home {
    position: relative;
    background: url("../../assets/images/bgIMG.png");
    background-size: cover;
    background-repeat: repeat;
    background-position: center;

    .app__wrapper {
      padding: 0;

      .copyright {
        display: none;
      }
    }
  }

  .app__header {
    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: row;
    padding: 6rem 2rem 0;

    @media screen and(min-width: 2000px) {
      padding-top: 8rem;
    }
    @media screen and(max-width: 1200px) {
      flex-direction: column;
    }
    @media screen and(min-width: 450px) {
      padding: 6rem 1rem 2rem;
    }
  }

  .app__header-info {
    flex: 0.65;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    @media screen and(max-width: 2000px) {
      width: 100%;
      margin-right: 0rem;
    }
  }

  .app__header-badge {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    .badge-cmp,
    .tag-cmp {
      padding: 1rem 2rem;
      border: var(--white-color);
      border-right: 50px;
      width: auto;
      flex-direction: row;
      box-shadow: ${({ theme }) => theme.shadows.md};
    }

    .tag-cmp {
      flex-direction: column;
      margin-top: 3rem;
      gap: 4px;

      p {
        width: 100%;
        text-transform: uppercase;
        text-align: right;
      }
    }

    span {
      font-size: 2.5rem;
      @media screen and(min-width: 2000px) {
        font-size: 5rem;
      }
    }

    @media screen and(max-width: 1200px) {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .app__header-circles {
    flex: 0.75;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
    margin-left: 1rem;

    div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.SecondarySection};
      box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);

      img {
        width: 60%;
        height: 60%;
      }
    }

    div:nth-child(1) {
      width: 100px;
      height: 100px;
    }

    div:nth-child(2) {
      margin: 1.75rem;
      width: 150px;
      height: 150px;
    }

    div:nth-child(3) {
      width: 70px;
      height: 70px;
    }

    @media screen and(min-width: 2000px) {
      div:nth-child(1) {
        width: 400px;
        height: 400px;
      }
      div:nth-child(2) {
        width: 170px;
        height: 170px;
      }

      div:nth-child(3) {
        width: 200px;
        height: 200px;
      }
    }
    @media screen and(max-width: 1200px) {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 0;
      div {
        margin: 1rem;
      }
    }
  }

  .app__header-img {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;

    img {
      width: 100%;
      object-fit: contain;
      z-index: 1;
    }

    .overlay__circle {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      height: 90%;
    }

    @media screen and (max-width: 1200px) {
      margin: 2rem 0;
    }
  }
`;
export { HeaderContainer };
