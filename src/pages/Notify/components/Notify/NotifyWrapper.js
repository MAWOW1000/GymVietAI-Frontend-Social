import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #2d2d2d;

  .notify {
    display: flex;
    flex-direction: row;
    background-color: #181818;
    padding: 1rem;
    border-radius: 20px;
    width: 40rem;
    color: #ffffff;
  }

  .header {
    margin-right: 1rem;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name {
    display: flex;
    gap: 0.5rem;
    font-size: 1rem;
    p {
      margin: 0;
    }
  }

  .reason {
    font-size: 1rem;
    color: #999;
    p {
      margin: 0;
    }
  }

  .content {
    font-size: 1rem;

    p {
      margin: 0.5rem 0;
      word-break: break-word;
    }
  }

  .interact {
    display: flex;
    align-items: center;

    width: 0.625rem;
    height: 0.625rem;
    margin: 0.5rem 0rem 0.25rem -0.5rem;
  }
  .interact button {
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
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
`;

export default Wrapper;
