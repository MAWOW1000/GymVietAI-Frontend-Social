import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Profile, Message, Explore, Dashboard, Error } from "./pages";

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
