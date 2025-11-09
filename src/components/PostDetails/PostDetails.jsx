import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
  const postDetails = useLoaderData();
  const {title,body} = postDetails;
  return (
    <div className='border mx-10 my-4 px-10 py-4  rounded-2xl space-y-3'>
      <h1 className='text-red-600 font-semibold italic font-serif' >This is post Details</h1>
      <h2 className='font-bold'>Title: {title} </h2>
      <h2>Body: {body}</h2>
    </div>
  );
};

export default PostDetails;