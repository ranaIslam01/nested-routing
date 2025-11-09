import { Link } from "react-router";

const Post = ({post}) => {
  const {title, id} = post;
  return (
    <div  className="border flex flex-col justify-center items-center  px-10 py-3 rounded-2xl mt-10 mx-10">
      <p>{id}</p>
      <h1 >{title}</h1>
      <div className="flex gap-x-6 my-4">
        <Link className="btn" to= {`/posts/${id}`}>Show Details</Link>
        <Link className="btn" to= "/users">Visit Users</Link>
      </div>
    </div>
  );
};

export default Post;