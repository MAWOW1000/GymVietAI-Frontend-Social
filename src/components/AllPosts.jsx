import React from "react";
import { Post } from "../components";
import { useDashboardContext } from "../pages/Dashboard";
import avatar from "../assets/images/avatar-1.jpg";
import image from "../assets/images/post-img.jpg";

const AllPosts = () => {
  const { user } = useDashboardContext();

  const posts = {
    post1: {
      avatar: avatar,
      name: user.name,
      lastName: user.lastName,
      content: `Memories broken, the truth goes unspoken. I've even forgotten my name. I don't know the season or what is the reason. I'm standing here holding my blade`,
      image: image,
    },
    post2: {
      avatar: avatar,
      name: user.name,
      lastName: user.lastName,
      content: `I am the storm that is approaching. Provoking, black clound isolation. I am reclaimer of my name, borned in flame i have been blessed`,
      image: image,
    },
  };

  return (
    <>
      <Post
        avatar={posts.post1.avatar}
        name={posts.post1.name}
        lastName={posts.post1.lastName}
        content={posts.post1.content}
        image={posts.post1.image}
      />

      <Post
        avatar={posts.post2.avatar}
        name={posts.post2.name}
        lastName={posts.post2.lastName}
        content={posts.post2.content}
        image={posts.post2.image}
      />

      <Post
        avatar={posts.post2.avatar}
        name={posts.post2.name}
        lastName={posts.post2.lastName}
        content={posts.post2.content}
        image={posts.post2.image}
      />

      <Post
        avatar={posts.post2.avatar}
        name={posts.post2.name}
        lastName={posts.post2.lastName}
        content={posts.post2.content}
        image={posts.post2.image}
      />

      <Post
        avatar={posts.post2.avatar}
        name={posts.post2.name}
        lastName={posts.post2.lastName}
        content={posts.post2.content}
        image={posts.post2.image}
      />
    </>
  );
};

export default AllPosts;
