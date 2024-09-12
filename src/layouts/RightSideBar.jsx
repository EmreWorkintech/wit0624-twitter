import rightSide from "../assets/right.png";

function RightSideBar() {
  return (
    <div className="w-1/4 h-screen border-l-2 border-solid border-l-slate-100">
      <img className="w-full" src={rightSide} />
    </div>
  );
}

export default RightSideBar;
