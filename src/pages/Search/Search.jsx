import React, { useState } from "react";
import Post from "../Home/components/Post/Post";
import avatar from "../../assets/images/avatar-1.jpg";
import image from "../../assets/images/post-img.jpg";
import { useDashboardContext } from "../Dashboard";
import Wrapper from "./SearchWrapper";

const Search = () => {
  const { user } = useDashboardContext();
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredPosts = posts.filter((post) => {
    if (searchQuery === "") {
      return false;
    }
    return (
      post.name.toLowerCase().includes(searchQuery.toLowerCase()) || // tìm theo tên người đăng
      (post.name + " " + post.lastName)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) || // tìm theo họ và tên đầy đủ
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) || // tìm theo nội dung bài viết
      (post.name + " " + post.lastName + " " + post.content) //tìm theo họ tên và nội dung
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ); //thích thì thêm các test case khác vào
  });

  return (
    <Wrapper>
      <div className="search-page">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredPosts.length === 0 && searchQuery === "" ? (
          <p>Hãy nhập tên hoặc nội dung mà bạn tìm kiếm</p>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id}>
              <Post {...post} />
            </div>
          ))
        )}

        {filteredPosts.length === 0 && searchQuery !== "" && (
          <p>Không tìm thấy bài viết nào.</p>
        )}
      </div>
    </Wrapper>
  );
};

export default Search;
