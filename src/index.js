
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './view/home/home'
import About from './view/about/about'
import Contact from './view/contact/contact'
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home/>,
//     },
//     {
//       path: "/about",
//       element: <About/>,
//     },
//     {
//       path: "/contact",
//       element:<Contact/>,
//     },
//   ]);
function App(){
  const path =window.location.pathname;
  switch(path){
    case "/":
    return <Home/>
    case "/about":
      return <About/>
      case "/contact":
        return <Contact/>
        default:
          return "page not found"
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </>
);

