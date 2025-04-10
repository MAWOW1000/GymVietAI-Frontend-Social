import styled from "styled-components";

const Wrapper = styled.div`
  .search-page {
    display: flex;
    flex-direction: column;
    padding: 12px;
    border: 0.5px solid #2d2d2d;
    max-width: 40rem;
    margin: 0 auto;
    color: #fff;
    font-family: Arial, sans-serif;
    background-color: #181818;
    border-radius: 20px;
    gap: 8px;
  }

  .search-bar {
    padding: 1.25rem;
    display: flex;
    justify-content: center;
    border-bottom: 0.5px solid #2d2d2d;
  }

  .search-bar input {
    width: 80%;
    max-width: 32rem;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
    border: 0.5px solid #2d2d2d;
    border-radius: 15px;
  }

  p {
    margin: 0;
    text-align: center;
    font-size: 16px;
    color: #555;
  }

  .post-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .no-results-message {
    text-align: center;
    font-size: 18px;
    color: #888;
    margin-top: 40px;
  }

  .post-user p {
    color: #fff;
  }

  .post-content p {
    text-align: left;
    color: #fff;
  }

  .interact {
    padding: 0.625rem;
  }
`;

export default Wrapper;
