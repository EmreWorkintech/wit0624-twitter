import { useContext } from "react";
import Post from "./Post";
import { MainContext } from "../contexts/MainContext";

function Posts() {
  const { state } = useContext(MainContext);

  return (
    <div>
      {state?.posts.map((item, index) => (
        <Post postItem={item} key={index} />
      ))}
    </div>
  );
}

export default Posts;
