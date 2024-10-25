import { useState } from 'react'

export function Products(){
    const url = "http://localhost:3000/products"
    const [ product, setProduct ] = useState([])
  
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "Application/Json" }
    })
    .then( res => res.json() )
    .then( data => { setProduct(data) } )

    return(
        <div>
            {
                product.map( item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>{item.price}</p>
                </div>
                ))
            }
        </div>
    )
}