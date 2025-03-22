import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 45rem;
  margin: 0 auto;
  border-radius: 1rem;

  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
  }

  .user-avatar img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 3px solid #eee;
  }

  .user-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #222;
    flex-grow: 1;
    text-align: left;
  }

  .description {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
    width: 100%;
    text-align: left;
    padding: 0 1rem;
  }
  p {
    font-size: 1.1rem;
  }
`;

export default Wrapper;
