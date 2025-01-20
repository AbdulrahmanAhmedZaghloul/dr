
import './App.css';
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from './pages/Home';
import Layout from "./components/Layout/Layout";
// import Home from "./pages/Home/Home";
let routering = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      { path: "/home", element: <Home /> },
    ],
  },
]);
function App() {
  return (<>
          <RouterProvider router={routering}>
          </RouterProvider>
        
  </>)
}
export default App;