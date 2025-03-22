import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    background-color: #0a0a0a;
    color: #fff;
    border: transparent;
    border-radius: 0.25rem;
    border: 1px solid rgba(255, 255, 255, 0.7);
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgb(255, 255, 255);
    text-align: center;
    visibility: hidden;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 0.25rem;
    background: #0a0a0a;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: 0.25rem;
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: #fff;
    letter-spacing: 1px;
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export default Wrapper;
