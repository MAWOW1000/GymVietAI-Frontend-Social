import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: 0.3s ease-in-out all;
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: #fff;
    width: 90vw;
    height: 95vh;
    border-radius: 0.25rem;
    padding: 0.5rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
  }
  .close-btn {
    position: absolute;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: #842029;
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: #64748b;
    padding: 2rem 2rem;
    text-transform: capitalize;
    transition: 0.3s ease-in-out all;
    text-decoration: none;
    font-size: 1.5rem;
  }
  .nav-link:hover {
    color: #f36100;
  }
  .icon {
    font-size: 2rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: #f36100;
  }
`;
export default Wrapper;
