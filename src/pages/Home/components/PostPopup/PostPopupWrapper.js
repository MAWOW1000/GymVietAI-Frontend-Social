import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.active {
    visibility: visible;
    opacity: 1;
  }

  .popup-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .popup-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 90%;
    max-width: 40rem;
    border-radius: 0.7rem;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background: #181818;
  }

  .popup-header {
    display: flex;
    align-items: center;
    padding: 15px;
    background: #181818;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
  }

  .popup-header img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.625rem;
  }

  .popup-header p {
    font-weight: 500;
    margin: 0;
    color: #fff;
  }

  .popup-body {
    padding: 15px;
    background: #181818;
  }

  .popup-body img {
    width: 100%;
    border-radius: 0.5rem;
    /* margin-top: 0.625rem; */
    margin-bottom: 1rem;
  }

  .popup-body p {
    text-align: left;
    margin: 0;
    color: #fff;
    margin-bottom: 0.625rem;
  }

  .close-btn {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    font-size: 1rem;
    cursor: pointer;
    color: #eeeeee;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0;
    background: #1f1f1f;
  }

  .popup-footer {
    background: #181818;
    margin-bottom: 0.7rem;
    justify-content: space-between;
    align-items: center;
  }

  .interact {
    margin: -1rem 0 -1rem 0;
    border-top: 0.5px solid rgba(255, 255, 255, 0.2);
    justify-content: space-evenly;
    width: 100%;
  }

  //comment
  .comments-list {
    max-height: 12.5rem;
    overflow-y: auto;
    padding: 0.625rem;
    border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  }

  .comment-item {
    display: flex;
    align-items: flex-start;
    /* margin-bottom: 0.625rem; */
    border-bottom: 0.5px solid #4e4e4e;
    button {
      background: transparent;
    }
  }

  .comment-avatar {
    margin-top: 1rem;
    font-size: 1.5rem;
    margin-right: 0.625rem;
  }

  .menu-dropdown {
    .menu-item {
      position: absolute;
      right: 0;
      background: #1a1a1a !important;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      width: 180px;
      padding: 8px;
      color: #fff;
      cursor: pointer;
    }
  }

  .comment-content {
    background: transparent;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    max-width: 100%;
    width: 100%;
  }

  .comment-header {
    display: flex;
    justify-content: space-between;
  }

  .comment-user {
    display: flex;
    font-weight: bold;
    margin-bottom: 0.25rem;
    padding: 0;
    margin: 0;
  }

  .comment-text {
    text-align: left;
    word-wrap: break-word;
    white-space: normal;
    margin: 0;
  }

  .comment-input {
    display: flex;
    align-items: center;
    padding: 0.625rem;
    border-top: 0.5px solid #ddd;
    width: 100%;
  }

  .comment-input input {
    flex: 1;
    padding: 0.5rem;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    outline: none;

    white-space: pre-wrap;
    box-sizing: border-box;
    resize: vertical;
    min-height: 2.5rem;
    overflow-y: auto;
  }

  .comment-input button {
    background: #181818;
    color: white;
    border: none;
    padding: 1rem;
    margin: 0rem 1rem 0rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .comment-input button:hover {
    background: #101010;
  }

  //reply comment
  .comment-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .comment-buttons > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  .reply-input {
    margin-top: 10px;
    width: 100%;

    button {
      &:hover {
        background-color: #101010;
        border: none;
        transition: none;
      }
    }
  }

  textarea {
    width: 100%;
    min-height: 50px;
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  .reply {
    display: flex;
  }

  @keyframes fadeIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default Wrapper;
