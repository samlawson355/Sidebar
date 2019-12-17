import React from 'react';
import Shop from './Shop.jsx'

const OtherSellers = (props) => {
    //logic for OtherSellers
    //will require mapping over list of other sellers to create divs
    let currentPrice = props.current.price;

    return (
        <div className={'other-sellers'}>
            <div id={'other-label'}><b>Other Sellers on Gammazon</b></div>
            {props.shops.map((seller, key) => (
                <Shop shop={seller} key={key} price={currentPrice}/>
            ))
            }
        </div>
    )

};

export default OtherSellers;
