import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData();
  const {name, website} = user;
  return (
    <div>
      <h1 className='text-red-600 font-semibold italic font-serif mb-4'>This is user details</h1>
      <div className='border bg-black text-white font-medium px-10 py-4 rounded-2xl'>
        <p> Name: {name}</p>
      <p>Website : {website}</p>
      </div>

    </div>
  );
};

export default UserDetails;