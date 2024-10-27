import "./List1.css"
import { useState, useEffect } from "react";

export function List1(){
    const url = "http://localhost:3000/transaction";
    const [data, setData] = useState([])

    const fetchData = async () => {
        try{
            const response = await  fetch(url, {
                method : "GET",
                headers: { 'Content-Type': 'application/json' },
            })
            .then( res => res.json() )
            .then( data => setData(data) )
        }catch ( error ) {
            console.log("Error :( Suporte (62 9999-9999 " + error);
        }
    }

    useEffect( () => {
        fetchData();
    }, [])

    return(
        <div>
            <h1>Listagem 02</h1>
            <h3>Usando Fetch</h3>

            <div className="card-body">
               { data.map( item => (
                    <div key={item.id} className="card-item" >
                        <h4> { item.description } </h4>
                        <p> { item.price }  </p>
                        <hr />
                    </div>
               ))}
            </div>
        </div>
    )
}