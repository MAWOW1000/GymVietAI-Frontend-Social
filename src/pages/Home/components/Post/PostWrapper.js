import styled from "styled-components";

const Wrapper = styled.div`
  .post-model {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    border-bottom: 1px solid #2d2d2d;
    max-width: 600px;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    font-family: Arial, sans-serif;
  }

  .post-user {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 -1rem -0.25rem;
    position: relative;
  }

  .post-user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    pointer-events: none;
  }

  .post-user p {
    font-size: 1rem;
    margin: 0;
    pointer-events: none;
  }

  .post-user span {
    margin-left: auto;
    cursor: pointer;
    font-size: 1rem;
    height: 1rem;
    padding: 0.2rem;
    pointer-events: auto;

    &:hover {
      text-align: center;
      background: #252525;
      border: 0.5px solid #202020;
      border-radius: 10px;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 40px;
    right: 0;
    background: #1a1a1a;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    width: 180px;
    padding: 8px;
    z-index: 1000;
    color: #fff;
    cursor: pointer;
  }

  .dropdown-menu .group {
    border-bottom: 1px solid #333;
    padding: 5px 0;
  }

  .dropdown-menu .group:last-child {
    border-bottom: none;
  }

  .dropdown-menu p {
    margin: 8px;
    padding: 5px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    display: flex;
    justify-content: space-between;
    align-items: center;

    pointer-events: auto;
  }

  .dropdown-menu p:hover {
    background: #252525;
  }

  .post-content {
    font-size: 1rem;
    line-height: 1.4;
    word-break: break-word;
    text-align: justify;
  }

  .post-content p {
    margin: 0 1.2rem 0 3rem;
    padding: 0;
  }

  .post-content img {
    width: calc(100% - 4.2rem);
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin: 8px 1.2rem 0 3rem;
  }

  .interact {
    margin: -1rem 0 -1rem 1.7rem;
    display: flex;
    align-items: center;
    height: 3rem;
  }

  .interact button {
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in-out;
    color: #cccccc;
  }

  .interact button p {
    margin-left: 0.5rem;
    font-size: 0.8rem;
    color: #cccccc;
  }

  .interact button:hover {
    color: #fff;
  }

  .interact button:active {
    transform: scale(0.9);
  }

  .interact button:focus {
    outline: none;
  }

  @media (max-width: 992px) {
    .dropdown-menu {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #222;
      color: white;
      padding: 16px 0;
      border-radius: 12px 12px 0 0;
      box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
      max-height: 50vh;
      overflow-y: auto;
      transition: transform 0.3s ease-in-out;
      transform: translateY(100%);
      z-index: 1000; /* Tăng z-index trên mobile */
    }

    .dropdown-menu.active {
      transform: translateY(0);
    }

    .dropdown-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
      z-index: 999;
    }

    .dropdown-overlay.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default Wrapper;
