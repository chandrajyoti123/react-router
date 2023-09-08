import './card.css'
import varun from './varun1.jpeg'
import kartik from './kartik4.jpeg'
import shraddha from './shraddha4.jpeg'
import tara from './tara3.jpeg'
import Button from './../button/button'

export default function Card({img,name,greet}){
    return(
        <div className="card">
        <img src= {`${img}`} className="cardImg"/>
        <h1 className="cardHeading">{name}</h1>
        <p className="cardPara">{greet}</p>
       <div className="btncss"><Button  text="click here"/></div> 
         </div>
        )
}