import React, { useState, useEffect } from "react";
import Post from "../Home/components/Post/Post";
import avatar from "../../assets/images/avatar-1.jpg";
import image from "../../assets/images/post-img.jpg";
import { useDashboardContext } from "../Dashboard";
import Wrapper from "./SearchWrapper";

const Search = () => {
  const { user } = useDashboardContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: avatar,
      name: user.name,
      lastName: user.lastName,
      content: `Memories broken, the truth goes unspoken. I've even forgotten my name.`,
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
      content: `I am the storm that is approaching.`,
      image: image,
      comments: [
        { id: 1, user: "ThiThanThien", text: "Bài viết hay quá!" },
        { id: 2, user: "TuanTienTu", text: "Mình rất thích nội dung này." },
      ],
    },
  ]);

  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredPosts([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const timeout = setTimeout(() => {
      const filtered = posts.filter((post) => {
        return (
          post.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.name + " " + post.lastName)
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.name + " " + post.lastName + " " + post.content)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );
      });

      setFilteredPosts(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); // clear timeout nếu user gõ tiếp
  }, [searchQuery, posts]);

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

        {searchQuery === "" && (
          <p>Hãy nhập tên hoặc nội dung mà bạn tìm kiếm</p>
        )}

        {loading && <p>Đang tìm kiếm...</p>}

        {!loading &&
          filteredPosts.length > 0 &&
          filteredPosts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}

        {!loading && searchQuery !== "" && filteredPosts.length === 0 && (
          <p>Không tìm thấy bài viết nào.</p>
        )}
      </div>
    </Wrapper>
  );
};

export default Search;
