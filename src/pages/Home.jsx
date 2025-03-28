import React from "react";
import CreateContent from "../components/CreateContent";
import Wrapper from "../assets/wrappers/HomeWrapper";
import { AllPosts } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <div className="Home">
        <CreateContent />
        <AllPosts />
      </div>
    </Wrapper>
  );
};

export default Home;
