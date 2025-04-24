import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Error } from "./pages";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Explore from "./pages/Explore/Explore";
import Message from "./pages/Message/Message";
import Search from "./pages/Search/Search";
import Post from "./pages/Post/Post";
import Notify from "./pages/Notify/Notify";
import User from "./pages/User/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "post/:postId",
        element: <Post />,
      },
      {
        path: "notify",
        element: <Notify />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
