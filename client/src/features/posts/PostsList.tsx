// import React from 'react'
import { useAppSelector } from "../../app/hooks";

export type postType = {
  id: string;
  profile_name: string;
  title: string;
  text_content: string;
  image?: string;
  video?: string;
};

const PostsList = () => {
  const posts = useAppSelector((state) => state.posts.entities);

  const renderedPosts = posts.map((post: postType) => (
    // Use a post component instead.
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.text_content}</p>
      <img src={post.image} alt="" />
    </article>
  ));

  return <>{renderedPosts}</>;
};

export default PostsList;
