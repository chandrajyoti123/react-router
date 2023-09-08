
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './view/home/home'
import About from './view/about/about'
import Contact from './view/contact/contact'


const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
  
    
    const path = window.location.pathname;
    switch(path)
    {
     case  '/':
     return <Home />
 
     case  '/about':
     return <About />
 
     case  '/contact':
     return <Contact />
 
     default:
     return <h1>This is a wrong path;</h1>
    }
  
}
root.render(
<>
<App/>
</>
);

