import Post from "./Post";
import { addAnalytics } from "../data";
import { usePosts } from "../services/queries";

function Posts() {
  const { isPending, isError, data: response, error } = usePosts();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {addAnalytics(response.data).map((item, index) => (
        <Post postItem={item} key={index} />
      ))}
    </div>
  );
}

export default Posts;
