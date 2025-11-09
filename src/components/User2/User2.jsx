import React, { use } from 'react';

const User2 = ({handlePromise}) => {
  const user = use(handlePromise);
  console.log(user);
  return (
    <div>
      <h1 className='text-red-600 font-semibold italic font-serif'>This is users 2</h1>
    </div>
  );
};

export default User2;