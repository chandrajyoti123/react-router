import Navbar from "../../component/Navbar/Navbar"
import ProductCard from "../../component/ProductCard/ProductCard"
import Footer from "../../component/Footer/Footer"
import './Product.css'
import img1 from './Jewellery-1.jpg'
import img2 from './Jewellery2.jpeg'
import img3 from './jwellery3.jpg'
export default function Product(){
    return(
<div>
    <Navbar/>
    <div className="ListOfProCard">
        <ProductCard imgofproduct={img1} title={"Neck lace"} price={"$134"}/>
        <ProductCard imgofproduct={img2} title={"ring"} price={"$232"}/>
        <ProductCard imgofproduct={img3} title={"Mangalsutra"} price={"$342"}/>

    </div>
    <Footer/>
</div>

       
    )
}