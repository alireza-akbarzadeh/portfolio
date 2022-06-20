import styled from "styled-components";
const WorkContainer = styled.div`
  .app__work {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }

  .app__work-filter {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0 2rem;

    .app__work-filter-item {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.primarySection};
      color: ${({ theme }) => theme.colors.text};
      font-weight: 800;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 0.5rem;
      @media screen and (min-width: 2000px) {
        padding: 1rem 2rem;
        border-radius: 0.85rem;
      }

      &:hover {
        background-color: var(--secondary-color);
        color: #fff;
      }
    }

    .item-active {
      background-color: var(--secondary-color);
      color: #fff;
    }
  }

  .app__work-portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .app__work-item {
      width: 270px;
      flex-direction: column;
      margin: 2rem;
      padding: 1rem;
      cursor: pointer;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.primarySection};
      color: ${({ theme }) => theme.colors.primarySection};
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
      }

      @media screen and (min-width: 2000px) {
        width: 470px;
        padding: 1.25rem;
        border-radius: 0.75rem;
      }
      @media screen and (max-width: 300px) {
        width: 100%;
        padding: 1rem;
      }
    }
  }

  .app__work-img {
    width: 100%;
    height: 230px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    @media screen and (min-width: 2000px) {
      height: 350px;
    }
  }

  .app__work-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-right: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;

    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      margin: 1rem;
      font-family: var(--font-base);
      font-weight: 800;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        width: 50%;
        height: 50%;
        color: var(--white-color);
      }
    }
  }

  .app__work-content {
    padding: 0.5rem;
    width: 100%;
    position: relative;
    flex-direction: column;

    h4 {
      margin-top: 1rem;
      line-height: 1.5;
    }

    .app__work-tag {
      position: absolute;
      padding: 0.5rem;
      border-radius: 10px;
      background-color: #fff;
      top: -25px;
    }

    .app_work-tech {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-wrap: wrap;
      margin-top: 1rem;
    }
  }
`;
const WorkDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
  .Work_Details-item {
    font-family: "Roboto", sans-serif;
    flex: 1 1 150px;
    height: 300px;
    & > img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  .app__work-tag {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 3px;
  }
`;
export { WorkContainer, WorkDetails };
