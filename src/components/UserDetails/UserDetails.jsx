import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate()
  const {id,name, website} = user;
  return (
    <div>
      <h1 className='text-red-600 font-semibold italic font-serif mb-4'>This is user details</h1>
      <div className='border bg-black text-white font-medium px-10 py-4 rounded-2xl'>
        <p>{id}</p>
        <p> Name: {name}</p>
        <p>Website : {website}</p>
        <button onClick={() => navigate(-1)} className='btn'>Go back</button>
      </div>

    </div>
  );
};

export default UserDetails;