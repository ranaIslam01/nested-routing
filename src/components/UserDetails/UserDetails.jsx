import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData();
  const {name, website} = user;
  return (
    <div>
      <h1 className='text-red-600 font-semibold italic font-serif'>This is user details</h1>
      <p> Name: {name}</p>
      <p>Website : {website}</p>

    </div>
  );
};

export default UserDetails;