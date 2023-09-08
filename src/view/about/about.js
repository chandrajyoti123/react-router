import './about.css'

import Navbar from './../../component/navbar/navbar'
import Footer from './../../component/footer/footer'
import tara from './tara.jpg'

export default function AboutUs(){
    return(
       <>
        <Navbar/>
        <div>
            <img src={tara} className='aboutimg'/>
            <div className='aboutheading'>hey......this is tara</div>
        <div className='abouttext'> my name is tara and i am web developer right now i am learning react js form road to code
        my name is tara and i am web developer right now i am learning react js form road to code
        my name is tara and i am web developer right now i am learning react js form road to code</div>
        </div>
        <Footer/>
        </>
    )
 }