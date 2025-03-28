import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
  }

  .nav-tabs {
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0;
    list-style: none;
  }

  .nav-item {
    width: calc(100% / 3);
    flex-grow: 1;
    text-align: center;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: color 0.3s ease, font-weight 0.3s ease;
  }

  .nav-item > .nav-link {
    width: 100%;
  }

  .nav-link.active {
    color: #fff;
  }
`;

export default Wrapper;
