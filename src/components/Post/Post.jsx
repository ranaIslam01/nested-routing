import { Link } from "react-router";

const Post = ({post}) => {
  const {title, id} = post;
  return (
    <div  className="border flex flex-col justify-center items-center  px-10 py-3 rounded-2xl mt-10 mx-10">
      <p>{id}</p>
      <h1 >{title}</h1>
      <Link className="text-blue-700 font-bold my-4" to= {`/posts/${id}`}>Show Details</Link>
    </div>
  );
};

export default Post;