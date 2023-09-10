import './navbar.css';
// import { Link } from 'react-router-dom';


export default function Navbar(){
    const path=window.location.pathname;
    return(
      
    <header className='header'>
        <span>Learning Javascript</span>
        <ul>
            
              <li><a href="/" className={path==='/'?'active':''} id='link'>Home</a></li>
              <li><a href="/about" className={path==='/about'?'active':'' } id='link'>About</a></li>
              <li><a href="/contact" className={path==='/contact'?'active':''} id='link'>Contact</a></li>
            
          
        </ul>
    </header>
    )
}

{/* <li><Link to="/" className={path==='/'?'active':''} id='link'>Home</Link></li>
<li><Link to="/about" className={path==='/about'?'active':'' } id='link'>About</Link></li>
<li><Link to="/contact" className={path==='/contact'?'active':''} id='link'>Contact</Link></li> */}