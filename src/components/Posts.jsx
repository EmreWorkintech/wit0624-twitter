import { posts } from "../data";
import Post from "./Post";

function Posts() {
  return (
    <div>
      {posts.map((item, index) => (
        <Post postItem={item} key={index} />
      ))}
    </div>
  );
}

export default Posts;
