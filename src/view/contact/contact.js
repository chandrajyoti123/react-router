import Navbar from './../../component/navbar/navbar'
import Footer from './../../component/footer/footer'
import './contact.css'
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