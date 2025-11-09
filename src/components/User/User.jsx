import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
  const {id,name,phone,email,website} = user;
  return (
    <div className='border px-4 py-5 my-4 bg-black text-white rounded-2xl'>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <Link className='text-blue-700 ' to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;