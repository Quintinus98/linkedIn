// import React from 'react'
import { useAppSelector } from "../../app/hooks";

export type Post = {
  id: string;
  title: string;
  body: string;
};

const PostsList = () => {
  const posts = useAppSelector((state) => state.posts.entities);

  const renderedPosts = posts.map((post: Post) => (
    // Use a post component instead.
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  ));

  return <>{renderedPosts}</>;
};

export default PostsList;
