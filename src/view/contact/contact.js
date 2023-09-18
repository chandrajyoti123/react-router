import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import './Contact.css'
export default function Contact(){
    return(
        <>
        <Navbar/>
        <div>
            <div className='heading'>Contact Me</div>
          <div className='input-field'>  Name:<input type='text' className='input'/></div>
           <div className='input-field'> email id:<input type='text' className='input'/></div>
            <div  className='input-field'>Phone No: <input type='text' className='input'/></div>
            
        </div>
        <Footer/>
        </>

    )
}