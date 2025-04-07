import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Error } from "./pages";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Explore from "./pages/Explore/Explore";
import Message from "./pages/Message/Message";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
