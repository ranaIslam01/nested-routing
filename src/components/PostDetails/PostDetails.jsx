import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
  const postDetails = useLoaderData();
  const {title,body,id} = postDetails;
  const navigate = useNavigate();
  return (
    <div className='border mx-10 my-4 px-10 py-4  rounded-2xl space-y-3'>
      <h1 className='text-red-600 font-semibold italic font-serif' >This is post Details</h1>
      <h2>{id}</h2>
      <h2><span className='font-bold'> Title:</span> {title} </h2>
      <h2><span className='font-bold'>Body:</span> {body}</h2>
      <button onClick={() => navigate(-1)} className='btn'> Go Back</button>
    </div>
  );
};

export default PostDetails;