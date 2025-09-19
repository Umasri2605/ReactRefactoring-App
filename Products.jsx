import React, { useEffect } from "react";
import './Products.css'

function Products(){
    var[products,setProducts]=React.useState([]);
    useEffect(function (){
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then ((data)=>{
        setProducts([...data])
    });
   },[]);
   return (
    <div className="border border-2 p-2 m-2 border-info">
        <h1>Products Length:{products.length}</h1>
        <ul className="products-list">
            {
                products.map((product)=>{
                    return <li>
                        <img src={product.image} style={{width:"200px",height:"200px"}} alt=""/>
                        <h4>{product.title.slice(0,20)}</h4>
                        <div>
                            {product.rating.rate} 
                            <i class="bi bi-star-fill"></i><br/>
                            <i>Rs.{product.price}</i>
                        </div>
                        </li>
                })
            }
        </ul>
    </div>
   )
}
export default Products;