import React from "react";
import { Post as PostComponent } from "../../components";
import image from "../../assets/images/post-img.jpg";
import avatar from "../../assets/images/avatar-1.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      //gọi api post
      await new Promise((r) => {
        setTimeout(r, 1000);
      });
      setPost({
        id: 1,
        avatar: avatar,
        name: "Meo",
        lastName: "Meo",
        content: `Memories broken, the truth goes unspoken. I've even forgotten my name. I don't know the season or what is the reason. I'm standing here holding my blade`,
        image: image,
        comments: [
          { id: 1, user: "DucVipPro", text: "Bài viết hay quá!" },
          { id: 2, user: "ViVuiVe", text: "Mình rất thích nội dung này." },
        ],
        initialLikes: 301,
      });

      setLoading(false);
    };

    getPost();
  }, [postId]);

  if (loading) return <p>Loading</p>;
  return <PostComponent post={post} />;
};

export default Post;
