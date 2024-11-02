import "./Pagination.css"

import { useSearchParams } from 'react-router-dom'

export function Pagination( { page, pages } ) {
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
            <button disabled={ page - 1 <= 0 }  onClick={ previousPage }> <i class="fa-regular fa-circle-left"></i> </button>
            <button> Pág  { page  }  </button>
            <button disabled={ page + 1 > pages } onClick={nextPage}> <i class="fa-regular fa-circle-right"></i>  </button>
        </div>
    )
}