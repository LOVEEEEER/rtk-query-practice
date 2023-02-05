import React from "react";
import { postAPI } from "../services/PostsService";
import PostItem from "./PostItem";

const PostsContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  return (
    <div>
      <div className="posts__list">
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostsContainer2;
