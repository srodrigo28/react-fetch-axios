import "./List3.css"
import { Pagination } from "./../Pagination"
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSearchParams } from 'react-router-dom'

export function List3(){
    const url = "http://localhost:3000/transaction";
    
    /* pagination config  */
    const [ searchParams, ] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
    
    const { data: tagsResponse, isLoading } = useQuery({
        queryKey: ['get-items', page],
        queryFn: async () => {
            const response = await fetch( `http://localhost:3000/transaction/?_page=${page}&_per_page=3`, { method: "GET" } )
            const data = await response.json()
            return data
        },
        placeholderData: keepPreviousData,
    })
    if(isLoading){
        return ( <h1> Carregando ... </h1> )
    }
    /* pagination config  */

    return(
        <div className="list-container">
            <section className="list">
                <h1>Listagem 03</h1>
                <h3>Usando Axios Total: { tagsResponse.items }</h3>

                <div className="card-body">
                { tagsResponse.data.map( item => (
                        <div key={item.id} className="card-item" >
                            <h4> { item.description } </h4>
                            <p> { item.price }  </p>
                            
                        </div>
                ))}
                </div>
            </section>

            {/* usePagination */}
            { tagsResponse 
                && 
                <Pagination pages={tagsResponse.pages}
                prev={tagsResponse.prev}
                items={tagsResponse.items} 
                next={tagsResponse.next}
                page={page} 
                /> 
            }
            {/* usePagination */}
        </div>
    )
}