import { useState } from 'react'
import './App.css'

function App() {
  const url = "http://localhost:3000/products"
  const [ product, setProduct ] = useState([])

  fetch(url, {})
  .then( (res) => res.json() )
  .then( (data) => { setProduct(data) } )
  return (
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

export default App
