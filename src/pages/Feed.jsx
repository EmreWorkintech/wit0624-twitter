import MainContent from "../layouts/MainContent";
import NavigationBar from "../layouts/NavigationBar";
import RightSideBar from "../layouts/RightSideBar";

function Feed() {
  return (
    <div className="flex w-3/4 m-auto">
      <NavigationBar />
      <MainContent />
      <RightSideBar />
    </div>
  );
}

export default Feed;
