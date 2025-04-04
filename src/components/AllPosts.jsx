import React, { useState } from "react";
import { Post } from "../components";
import { useDashboardContext } from "../pages/Dashboard";
import Modal from "react-modal";
import avatar from "../assets/images/avatar-1.jpg";
import image from "../assets/images/post-img.jpg";

Modal.setAppElement("#root"); // Đảm bảo modal hoạt động tốt trên ứng dụng

const AllPosts = () => {
  const { user } = useDashboardContext();
  const [selectedPost, setSelectedPost] = useState(null);

  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: avatar,
      name: user.name,
      lastName: user.lastName,
      content: `Memories broken, the truth goes unspoken. I've even forgotten my name. I don't know the season or what is the reason. I'm standing here holding my blade`,
      image: image,
      comments: [
        { id: 1, user: "DucVipPro", text: "Bài viết hay quá!" },
        { id: 2, user: "ViVuiVe", text: "Mình rất thích nội dung này." },
      ],
      initialLikes: 301,
    },
    {
      id: 2,
      avatar: avatar,
      name: user.name,
      lastName: user.lastName,
      content: `I am the storm that is approaching. Provoking, black clound isolation. I am reclaimer of my name, borned in flame i have been blessed`,
      image: image,
      comments: [
        { id: 1, user: "ThiThanThien", text: "Bài viết hay quá!" },
        { id: 2, user: "TuanTienTu", text: "Mình rất thích nội dung này." },
      ],
    },
    {
      id: 3,
      avatar: avatar,
      name: user.name,
      lastName: user.lastName,
      content: `I am the storm that is approaching. Provoking, black clound isolation. I am reclaimer of my name, borned in flame i have been blessed`,
      image: image,
      comments: [
        { id: 1, user: "NhienNhanhNhen", text: "Bài viết hay quá!" },
        { id: 2, user: "ViVuiVe", text: "Mình rất thích nội dung này." },
      ],
    },
    {
      id: 4,
      avatar: avatar,
      name: user.name,
      lastName: user.lastName,
      content: `I am the storm that is approaching. Provoking, black clound isolation. I am reclaimer of my name, borned in flame i have been blessed`,
      image: image,
      comments: [
        { id: 1, user: "DucVipPro", text: "Bài viết hay quá!" },
        { id: 2, user: "ViVuiVe", text: "Mình rất thích nội dung này." },
      ],
    },
    {
      id: 5,
      avatar: avatar,
      name: user.name,
      lastName: user.lastName,
      content: `I am the storm that is approaching. Provoking, black clound isolation. I am reclaimer of my name, borned in flame i have been blessed`,
      image: image,
      comments: [
        { id: 1, user: "DucVipPro", text: "Bài viết hay quá!" },
        { id: 2, user: "ViVuiVe", text: "Mình rất thích nội dung này." },
      ],
    },
  ]);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} onClick={() => setSelectedPost(post)}>
          <Post {...post} />
        </div>
      ))}
    </>
  );
};

export default AllPosts;
