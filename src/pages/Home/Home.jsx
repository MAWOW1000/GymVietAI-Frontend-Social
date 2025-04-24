import React, { useState } from "react";
import CreateContent from "../../components/CreateContent";
import Wrapper from "./HomeWrapper";
import AllPosts from "./components/AllPosts";

const Home = () => {
  const [newPost, setNewPost] = useState(null);

  const handlePostCreated = (post) => {
    setNewPost(post);
  };

  return (
    <Wrapper>
      <div className="Home">
        <CreateContent onPostCreated={handlePostCreated} />
        <AllPosts newPost={newPost} />
      </div>
    </Wrapper>
  );
};

export default Home;
