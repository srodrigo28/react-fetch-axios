import "./Pagination.css"
import { useSearchParams } from 'react-router-dom'

export function Pagination( { items, page, pages, prev, next } ){
    const [, setSearchParams ] = useSearchParams()

    function firsPage() {
        setSearchParams( params => {
            params.set('page', '1')
            return params
        })
    }
    
    function previousPage() {
        if( page - 1 < 0 ) {  return false }

        setSearchParams( params => {
            params.set( 'page', String(page - 1) )
            return params
        })
    }

    function nextPage() {
        if( page + 1 > pages ) {  return false }

        setSearchParams( params => {
            params.set( 'page', String(page + 1) )
            return params
        })
    }

    function lastPage() {
        setSearchParams( params => {
            params.set('page', String(pages))
            return params
        })
    }

    return(
        <div className='pagination-container'>
            <button disabled={ page - 1 <= 0 }  onClick={ previousPage }> anterior </button>
            <button> Pág Atual     { page  }  </button>
            <button disabled={ page + 1 > pages } onClick={nextPage}> próximo  </button>
        </div>
    )
}