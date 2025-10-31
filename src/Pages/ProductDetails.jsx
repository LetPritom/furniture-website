import React from 'react';
import { useParams } from 'react-router';
import useProductsData from '../Hooks/useProductsData';

const ProductDetails = () => {

    // usePrams hooks alawas amader ekta objecta return kore jar karone ekhne destructuring KeyboardEvent
    // and amader ekhne param k console.log korle amra ekta object dekte parbo jar modde ekta objects ache and or modde kta id ache 
    // r oi id holo amr rotes er modde dynamic korar jonne jieta use kora hoiche oi lekha ta 

    // params theke jokhn amra kichu receive kori tokhn oita stringn a convert hoye jai 
    // ekhne jemon id a string a convert kore felche


    const {id} = useParams() 
    console.log(id)
    const{products} = useProductsData()
    const productFind = products.find((find) => String(find.id) === id )
    console.log(productFind)
    return (
        <div>
            <h1>ProductsDetails Page</h1>
        </div>
    );
};

export default ProductDetails;