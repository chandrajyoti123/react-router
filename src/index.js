
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './view/Home/Home'
import About from './view/About/About'
import Contact from './view/Contact/Contact'
import Navbar from './component/Navbar/Navbar';
import Product from './view/Product/Product';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element:<Contact/>,
    },
    {
      path: "/product",
      element:<Product/>,
    },
  ]);
// function App(){
//   const path =window.location.pathname;
//   switch(path){
//     case "/":
//     return <Home/>
//     case "/about":
//       return <About/>
//       case "/contact":
//         return <Contact/>
//         default:
//           return "page not found"
//   }
// }


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>

    <RouterProvider router={router} />
    {/* <App/> */}
  </>
);

