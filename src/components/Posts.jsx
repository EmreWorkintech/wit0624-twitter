import { useSelector } from "react-redux";
import Post from "./Post";

function Posts() {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      {posts.map((item, index) => (
        <Post postItem={item} key={index} />
      ))}
    </div>
  );
}

export default Posts;
