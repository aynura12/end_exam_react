import Add from "../page/Add";
import Home from "../page/Home";
import Mainroot from "../component/Mainroot";
const ROUTES = [
  {
    path: "/",
    element: <Mainroot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add/>,
      },
    ],
  },
];
export default ROUTES