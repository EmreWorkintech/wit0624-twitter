import Posts from "../components/Posts";
import TweetForm from "../components/TweetForm";

function MainContent() {
  return (
    <div className="w-2/4 p-4">
      <h1 className="font-bold text-lg">Home</h1>
      <TweetForm />
      <Posts />
    </div>
  );
}

export default MainContent;
