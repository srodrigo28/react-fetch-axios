import "./List2.css"
import axios from "axios";
import { useState, useEffect } from "react";

export function List2(){
    const url = "http://localhost:3000/transaction";
    const [data, setData] = useState([])

    const fetchData = async () => {
        try{
            const response = await axios.get(url)
            setData(response.data)
            console.log(data)
        }catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchData();
        console.log(data)
    }, [])

    return(
        <div>
            <h1>Listagem 02</h1>
            <h3>Usando Axios</h3>

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