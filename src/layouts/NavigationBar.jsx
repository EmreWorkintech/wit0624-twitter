import Navigation from "../components/Navigation";

function NavigationBar() {
  return (
    <div className="w-1/4 flex flex-col p-4">
      <i className="fa-brands fa-twitter text-blue-500 text-3xl"></i>
      <Navigation />
      <div className="bg-blue-500 text-center rounded-full text-white p-4 w-3/4">
        Tweet
      </div>
    </div>
  );
}

export default NavigationBar;
