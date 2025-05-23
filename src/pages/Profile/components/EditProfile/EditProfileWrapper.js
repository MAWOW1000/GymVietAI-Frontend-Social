import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;

  .edit-profile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    background: transparent;
    border: 0.7px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    cursor: pointer;
    color: #fff;
    transition: background 0.3s ease;
    width: 80vw;
    max-width: 38rem;
  }

  .edit-profile:hover {
    background: #101010;
    color: #fff;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .hidden {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #101010;
    border-bottom: 1px solid #3a3a3a;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    pointer-events: none;
  }

  .btn-yes,
  .btn-no {
    background: transparent;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    outline: none;

    &:hover {
      border-radius: 0%;
      background: rgba(58, 58, 58, 0.7);
    }
  }

  .show-overlay {
    opacity: 1;
    visibility: visible;
  }

  .dropdown {
    position: absolute;
    left: 50%;
    width: 40rem;
    background: #282828;
    color: #fff;
    border: 2px solid #f3f5f726;
    border-radius: 0.5rem;
    padding: 1rem;
    display: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    visibility: hidden;
  }

  .show-dropdown {
    display: block;
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  .form-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form-label {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    align-self: flex-start;
    text-transform: capitalize;
  }

  .form-input {
    background: transparent;
    border: none;
    border-bottom: 2px solid #f3f5f726;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    color: #fff;
    transition: border-bottom-color 0.3s ease-in-out;
  }

  .form-input:focus {
    border-bottom-color: #ccc;
  }

  .submit-btn,
  .cancel-btn {
    display: inline-block;
    padding: 1rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    background: transparent;
    border: 2px solid #f3f5f726;
    border-radius: 0.5rem;
    cursor: pointer;
    color: darkgray;
    transition: background 0.3s ease;
    width: 18rem;
  }

  .submit-btn:hover {
    background: #fff;
    color: #000;
  }

  .cancel-btn:hover {
    background: #fff;
    color: #000;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  @media (max-width: 992px) {
    .dropdown {
      width: calc(80% - 30px);
    }
    .cancel-btn,
    .submit-btn,
    .button-group {
      visibility: hidden;
      opacity: 0;
      margin: 0;
      padding: 0;
    }

    .overlay {
      background: #101010;
    }

    .show-overlay .hidden {
      opacity: 1;
      visibility: visible;
      pointer-events: visible;
    }
  }
`;

export default Wrapper;
