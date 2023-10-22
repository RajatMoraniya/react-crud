import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Componenets/Home";
import Create from "./Componenets/Create";
import Edit from "./Componenets/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/create",
    element: <Create></Create>,
  },
  {
    path: "/edit/:id/:name/:age/:email",
    element: <Edit></Edit>,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
