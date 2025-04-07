import React from "react";
import CreateContent from "../../components/CreateContent";
import Wrapper from "./HomeWrapper";
import AllPosts from "./components/AllPosts";

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
