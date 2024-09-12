/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import userEvent from "@testing-library/user-event";

import App from "../App.jsx";
import Feed from "../pages/Feed.jsx";

import RightSideBar from "../layouts/RightSideBar.jsx";

const queryClient = new QueryClient();

describe("Login Form", () => {
  it("renders the App component", () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    );

    //screen.debug(); // prints out the jsx in the App component unto the command line
  });

  it("opens feed page after successful login", async () => {
    //Arrange
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    );

    //act
    const user = userEvent.setup();
    const email = screen.getByTestId("login-form-email");
    await user.type(email, "emre@wit.com.tr");

    const pass = screen.getByPlaceholderText(
      "Password'unuzu adresinizi giriniz"
    );

    await user.type(pass, "1234TbU1");

    const button = screen.getByText("Log In");
    expect(button).not.toBeDisabled();
    fireEvent.click(button);

    //

    const heading = await screen.findByTestId("head");
    expect(heading).toHaveTextContent("Home");

    //screen.debug();
  });

  it("renders rightsideBar", () => {
    render(<RightSideBar />);
  });

  it("renders Feed Page", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Feed user={{ email: "emre@wit.com.tr" }} />
      </QueryClientProvider>
    );
  });

  it.only("redirects to login page", () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
