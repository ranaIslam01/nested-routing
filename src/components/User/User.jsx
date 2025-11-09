import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
  const {id,name,phone,email,website} = user;
  return (
    <div className='border px-10 py-8 my-4 bg-black text-white rounded-2xl'>
      <p>{id}</p>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <div className='flex  justify-between mt-5'>
        <Link className="btn" to={`/users/${id}`}>Show Details</Link>
        <Link className='btn' to= "/posts">Visit Posts</Link>
      </div>
    </div>
  );
};

export default User;