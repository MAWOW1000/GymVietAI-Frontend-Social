// src/assets/wrappers/PostWrapper.js
import styled from "styled-components";

export const Wrapper = styled.div`
  .share {
    display: flex;
    flex-direction: column;
    padding: 2rem 0.75rem 0.75rem 0.75rem;
    border: 0.5px solid #2d2d2d;
    max-width: 40rem;
    margin: 0 auto;
    color: #fff;
    font-family: Arial, sans-serif;
    background-color: #181818;
    border-radius: 20px;
    gap: 8px;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 -0.5rem -0.25rem;
    position: relative;
  }

  .header img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .header p {
    font-size: 1rem;
    margin: 0;
  }

  .body {
    font-size: 1rem;
    line-height: 1.4;
    word-break: break-word;
    text-align: justify;
  }

  .body p {
    margin: 0 1.2rem 0 3rem;
    padding: 0;
  }

  .body img {
    width: calc(100% - 4.2rem);
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin: 0.5rem 1.2rem 1rem 3rem;
  }

  .interact {
    margin: -1rem 0 -1rem 2rem;
    display: flex;
    align-items: center;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    border-width: 0.5px 0;
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

  .comments-list {
    max-height: 12.5rem;
    overflow-y: auto;
    padding: 0.625rem;
    margin: 1rem 0rem 0rem 2rem;
  }

  .comment-item {
    display: flex;
    align-items: flex-start;
    /* margin-bottom: 0.625rem; */
  }

  .comment-avatar {
    margin-top: 1rem;
    font-size: 1.5rem;
    margin-right: 0.625rem;
  }

  .comment-content {
    background: transparent;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    max-width: 80%;
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
`;

export default Wrapper;
