import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
