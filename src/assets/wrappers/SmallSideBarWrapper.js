import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    background: #0a0a0a;
    display: flex;
    flex-direction: row; /* Căn ngang */
    align-items: center;
    justify-content: space-around; /* Căn đều các phần tử */
    z-index: -1;
    opacity: 0;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    visibility: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }

  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
  }

  .nav-links {
    display: flex;
    flex-direction: row; /* Để các link nằm ngang */
    justify-content: space-around;
    width: 100%;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: #64748b;
    padding: 1rem;
    text-transform: capitalize;
    transition: 0.3s ease-in-out all;
    text-decoration: none;
    font-size: 1.2rem;
    text-align: center;
  }

  .nav-link:hover {
    color: #fff;
  }

  .icon {
    font-size: 2rem;
    margin-right: 0.5rem;
    display: grid;
    place-items: center;
  }

  .active {
    color: #fff;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.8rem;
    color: #842029;
    cursor: pointer;
  }

  .nav-links .nav-link .icon {
    position: relative; /* Để định vị badge tuyệt đối bên trong */
    display: inline-flex; /* Để căn giữa icon và badge nếu cần */
    align-items: center;
    justify-content: center;
  }

  .nav-links .nav-link .icon .notification-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    font-size: 0.7rem;
    border-radius: 50%;
    padding: 2px 5px;
    line-height: 1;
  }

  .navbar .nav-links .nav-link .icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .navbar .nav-links .nav-link .icon .notification-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    font-size: 0.7rem;
    border-radius: 50%;
    padding: 2px 5px;
    line-height: 1;
  }
`;

export default Wrapper;
