import React, { useState, useEffect } from "react";
import Post from "../Home/components/Post/Post";
import Wrapper from "./SearchWrapper";
import { privateAxios } from "../../api/client";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const postsResponse = await privateAxios.get("/posts/feed", {
          params: {
            page: 1,
            limit: 20,
          },
        });
        const loadedPosts = postsResponse.data.data.posts || [];
        setPosts(loadedPosts);
        // console.log("Posts response data: ", loadedPosts);
      } catch (err) {
        setError(err.response?.data?.message || "Không thể tải bài viết.");
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredPosts([]);
      setFilteredUsers([]);
      return;
    }

    const searchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const usersResponse = await privateAxios.get("/profiles/search", {
          params: {
            query: searchQuery,
            page: 1,
            limit: 20,
          },
        });
        setFilteredUsers(usersResponse.data.data.profiles || []);

        // Lọc bài viết theo nội dung hoặc người đăng
        const filtered = posts.filter((post) => {
          const username = post.profile?.username?.toLowerCase() || "";
          const displayName = post.profile?.displayName?.toLowerCase() || "";
          const content = post.content?.toLowerCase() || "";
          const combined = `${username} ${displayName} ${content}`;

          return combined.includes(searchQuery.toLowerCase());
        });

        // console.log("Filtered results: ", filtered);
        setFilteredPosts(filtered);
      } catch (err) {
        setError(err.response?.data?.message || "Không thể tìm kiếm.");
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(searchData, 1000);
    return () => clearTimeout(timeout);
  }, [searchQuery, posts]);

  return (
    <Wrapper>
      <div className="search-page">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {error && <p className="error">{error}</p>}
        {loading && <p>Đang tìm kiếm...</p>}

        {searchQuery === "" && !loading && (
          <p>Hãy nhập tên hoặc nội dung mà bạn tìm kiếm</p>
        )}

        {!loading && filteredUsers.length > 0 && (
          <UserList users={filteredUsers} />
        )}

        {!loading && filteredPosts.length > 0 && (
          <div className="posts-list">
            {filteredPosts.map((post) => (
              <div key={post.id}>
                <Post post={post} />
              </div>
            ))}
          </div>
        )}

        {!loading &&
          searchQuery !== "" &&
          filteredUsers.length === 0 &&
          filteredPosts.length === 0 && <p>Không tìm thấy kết quả nào.</p>}
      </div>
    </Wrapper>
  );
};

export default Search;
