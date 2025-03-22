import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/error.svg"
import Wrapper from "../assets/wrappers/ErrorWrapper";

const Error = () => {
    const error = useRouteError()

    if(error.status === 404)
    return(
        <Wrapper>
            <div>
                <img src={img} alt="not found" />
                <h3>Hmm, page not found</h3>
                <p>Nothing here you looking for</p>
                <Link to='/'>Back Home</Link>
            </div>
        </Wrapper>
    )
  return (
    <Wrapper>
        <div>
          <h3>something went wrong</h3>
        </div>
    </Wrapper>
  );
};

export default Error;
