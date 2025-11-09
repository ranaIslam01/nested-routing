import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <p className='text-red-600 font-semibold italic font-serif ml-7'>This is posts</p>
      {
        posts.map(post => <Post key={post.id} post= {post}></Post>)
      }
    </div>
  );
};

export default Posts;