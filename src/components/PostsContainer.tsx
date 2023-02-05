import React, { useState, useEffect } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostsService";
import PostItem from "./PostItem";

const PostsContainer = () => {
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(100, {
    pollingInterval: 1000,
  });
  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  return (
    <div>
      <div className="posts__list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostsContainer;
