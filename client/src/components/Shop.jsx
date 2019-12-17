import React from 'react';

const Shop = (props) => {

    let modPrice = (Number(props.price) * Math.random()) + Number(props.price);
    modPrice = modPrice.toFixed(2);

    return (
        <div className={'seller-K'}>
            <div className={'other-price-row'}>
                <div id={'other-price'} className={'red-K'}>${modPrice.toString()}</div>
                <button id={'other-add-cart'}>Add to Cart</button>
            </div>
            <div className={'other-product-details'}>+ Free Shipping
                Sold by: <a href="#">{props.shop.name}</a></div>
        </div>
    )

};

export default Shop;