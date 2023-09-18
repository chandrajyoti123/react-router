import { useState } from 'react'
import './ProductCard.css'


export default function ProductCard({imgofproduct,title,price}){
    const [count ,setCount]=useState(0)
    function incre(){
       if(count<=19){
        setCount(count+1);
       }
else{
    alert("you can't increase the quantity")
}
       
    }
    function decre(){
      if(count>=1){
        setCount(count-1);
      }
      else{
        alert("you can't decrease the quantity")
    }
    }
    return(
        <div className="ProductCard">
           
            <img src={imgofproduct} className="Productimgitem"/>
            
            <div className="Productbody">
                <div className="ProductTitle">{title}</div>
                <div className="ProductPrice"><b>Price:</b> <span className='price'>{price}</span> </div>
                <div className="AddToCard">
                    <button className="AddToCardBtn" onClick={incre}>+</button>
                <span className='AddToCardBtn'>{count}</span>
                    <button className="AddToCardBtn" onClick={decre}>-</button>

                </div>

            </div>
        </div>
    )
}