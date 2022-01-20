import React, {useEffect} from 'react';
import {useStore} from '../store';


function Home() {
    
    const store = useStore();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then( res => res.json() )
        .then( data => {
            store.dispatch( {type: 'LOAD_PRODUCTS', payload: data} )
        })
        .catch( err => {
            console.log( err.message );
        });

        console.log(store);

    }, []);


    return (
        <div className="products">
            {
            store.state.products.map( product => {
                return( <div className="product" key={'p_' + product.id}>
                    <div className="thumb"><img src={product.image} /></div>
                    <div className="name">{product.title}</div>
                    <div className="price">Price: ${product.price}</div>
                </div>)
            })
            }
        </div>
    )
}

export default Home
