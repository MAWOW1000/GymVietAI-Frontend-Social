import styled from "styled-components";
const Wrapper = styled.div`
min-height: 90vh;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

img {
  width: 90vw;
  max-width: 600px;
  display: block;
  margin-bottom: 2rem;
  margin-top: -3rem;
}

h3 {
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}

p {
  line-height: 1.5;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #6b7280;
}

a {
  color: #f59e0b; 
  text-transform: capitalize;
}

`;
export default Wrapper;
