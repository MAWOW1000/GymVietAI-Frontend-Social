import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: #0a0a0a;
      min-height: 100vh;
      height: 100%;
      width: 100px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
      img {
        width: 5rem;
      }
    }
    .nav-links {
      /* padding-top: 2rem; */
      display: flex;
      flex-direction: column;

      /* margin-top: 10rem; */
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: rgba(128, 128, 128, 0.5);
      padding: 1rem 0;
      margin-left: 2rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
      text-decoration: none;
      font-size: 1.2rem;

      margin-top: 1rem;
      border-radius: 10px;
    }
    .nav-link:hover {
      padding-left: 1.3rem;
      transition: 0.3s ease-in-out all;
      background: #ffffff0d;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: #fff;
    }
    .pending {
      background: #f8fafc;
    }
  }
`;
export default Wrapper;
