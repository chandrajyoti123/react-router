import './home.css'
import Navbar from './../../component/footer/footer'
import Card from './../../component/card/card'
import Footer from './../../component/footer/footer'

 export default function Home(){
    return(
       <>
        <Navbar/>
        <div className='cards'>
        <Card name="Kartik Aryan" greet="good morning kartik ,You are goood actor in bollywood and I like your your all films" img="kartik"/>
      <Card name="Varun Dhavan" greet="good morning varun ,You are goood actor in bollywood and I like your your all films" img="varun"/>
      <Card name="Tara Sutaria" greet="good eveing tara ,You are goood actress in bollywood and I like your your all films" img="shraddha"/>
      <Card name="Shraddha" greet="good afternoon shraddha ,You are goood actress in bollywood and I like your your all films" img="tara"/>
        </div>
        <Footer/>
        </>
    )
 }