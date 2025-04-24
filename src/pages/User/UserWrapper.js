import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: #181818;
  border-radius: 0.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 40rem;
  margin: 0 auto;
  border-radius: 1rem;
  border: 0.5px solid #2d2d2d;
  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0rem;
    h3 {
      margin-bottom: 0;
    }
    h5 {
      font-weight: 300;
      margin-top: 0;
    }
  }

  .user-avatar img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 3px solid #eee;
  }

  .user-name {
    font-size: 1.2rem;
    color: #fff;
    flex-grow: 1;
    text-align: left;
  }

  .description {
    font-size: 0.9rem;
    color: #fff;
    margin-top: 0.5rem;
    width: 100%;
    text-align: left;
    padding: 0rem;
    font-weight: 100;
  }
  p {
    font-size: 1.05rem;
  }

  .other {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0rem 0.5rem 1.5rem;
    p {
      margin: 0;
      font-size: 1rem;
      color: #fff;
      opacity: 0.4;
      font-weight: 200;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .icons {
      display: flex;
      gap: 10px;
      cursor: pointer;

      span {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  .tabbar {
    width: 100%;
    max-width: 100%;
  }
`;

export default Wrapper;
