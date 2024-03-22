import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Auditories } from "./pages/Auditories";
import { Reg } from "./pages/Reg";
import { Login } from "./pages/Login";
import { Auditory } from "./pages/Auditory";
import { Analytics } from "./pages/Analytics";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auditories/>,
    },
    {
      path: "/registration",
      element: <Reg/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/auditory/:name",
      element: <Auditory/>,
    },
    {
      path: "/analitycs",
      element: <Analytics/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
