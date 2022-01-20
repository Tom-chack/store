import React, {useEffect} from 'react';
import {useStore} from '../store';

function Catalog() {

    const store = useStore();

    useEffect(() => {

        /* Fetch product categories and set them to state.categories */
        fetch('https://fakestoreapi.com/products/categories')
        .then( res => res.json() )
        .then( data => {
            store.dispatch( { type: 'LOAD_CATEGORIES', payload: data } )
        })
        .catch( err => console.log( err.message ) );
        
    }, []);


    return (
        <div className="categories">
            { store.state.categories.map( (category, index) => {
                return( 
                    <div className="category" key={'c_' + index}>
                        <div className="title">{category}</div>
                        <div>
                            Recent Products...
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default Catalog
