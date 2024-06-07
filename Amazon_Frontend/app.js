const React = require('react')
const ReactDOM = require('react-dom/client')
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Homepage from './src/pages/homepage/homepage'
import SignUp from "./src/pages/homepage/signup";
import Login from "./src/pages/homepage/login";


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Homepage/>
        },
        {
            path: "/signup",
            element: <SignUp/>
        },
        {
            path: "/login",
            element: <Login/>
          }
      ]);
    
    return (
        <div>
            {/* <Homepage/> */}
            <RouterProvider router={router} />
        </div>
    )
}


root.render(<App />)