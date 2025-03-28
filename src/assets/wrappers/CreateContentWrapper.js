import styled from "styled-components";
const Wrapper = styled.div`
  .row-post {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background-color: transparent;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
    }
    p {
      flex-grow: 1;
      margin: 0;
      color: #555;
      text-align: left;
      cursor: text;
    }
    button {
      border: none;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      border-radius: 10px;
      padding: 0.5rem 1rem;

      cursor: pointer;
    }
    button:hover {
      background: #101010;
    }
  }

  //POST
  .show-post {
    display: flex;
  }

  .post {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }

  .post-container {
    background: #1e1e1e;
    width: 100%;
    max-width: 38rem;
    border-radius: 10px;
    padding: 1rem;
    color: white;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
    padding: 0;
    margin: 0;
    /* padding-bottom: 10px; */
  }

  p {
    margin: 0;
    padding: 0;
  }

  .btn-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background: #101010;
    }
  }

  .icons span {
    margin-left: 10px;
    cursor: pointer;
    color: #aaa;
  }

  .post-user {
    display: flex;
    align-items: center;
    margin: 0.5rem;
  }

  .post-user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .post-input textarea {
    width: 100%;
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 0rem 0.5rem 0.5rem;
    border-bottom: 1px solid #444;
    resize: none;
    overflow-y: auto;
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  .post-input input {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
    border-bottom: 1px solid #444;
  }

  .post-file {
    display: flex;
    /* justify-content: space-between;   */
    gap: 0.5rem;
    font-size: 1.3rem;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
    color: #aaa;
  }

  .btn-confirm {
    width: 100%;
    border: none;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background: #101010;
    }
  }

  @media (max-width: 992px) {
    .show-post {
      position: flex;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 100vw;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: 999;
    }

    .post-container {
      width: 100%;
      height: 100%;
      border-radius: 0;
      padding: 1rem;
    }
  }
`;
export default Wrapper;
