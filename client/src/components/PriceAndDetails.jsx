import React from 'react';

const PriceAndDetails = (props) => {

    function popOverMouseIn() {
        let popOver = document.getElementById('promo-popover');
        if (popOver.classList.contains('hidden-div')) {
            popOver.classList.remove('hidden-div');
        }
    }

    function popOverMouseOut() {
        let popOver = document.getElementById('promo-popover');
        if (!popOver.classList.contains('hidden-div')) {
            popOver.classList.add('hidden-div');
        }
    }

    function popOverClickClose() {
        let popOver = document.getElementById('promo-popover');
        if (!popOver.classList.contains('hidden-div')) {
            popOver.classList.add('hidden-div');
        }
    }

    function addToCart() {
        let quantityToAdd = document.getElementById('quantity-selector').value;
        let currentStorage = localStorage.getItem("cVal");
        let toStore = (Number(quantityToAdd) + Number(currentStorage));
        localStorage.setItem("cVal", toStore.toString());
    }

    return (
        <div className={'purchase-details-K'}>
            <div className={'pricing-details'}>
                <div id={'price-K'} className={'red-K'}>${props.current.price}</div>
                <div id={'shipping-K'}>& <b>FREE Shipping</b> <a href='#'>Details</a></div>
                <div id={'returns-K'}>& <a href='#'>FREE Returns</a></div>
                <br/>
                <div id={'shipping-details-K'}><b>Want it Wednesday, Dec. 18?</b> Order within <span
                    className={'green-K'}>15 hrs 34 mins</span> and
                    choose <b>Two-Day Shipping</b> at checkout.
                    <br/><a href='#'>Details</a>
                </div>
                <br/>
                <div id={'stock-K'}><span className={'green-K'}><b>In Stock.</b></span></div>
                <br/>
                <div id={'quantity-K'}>
                    <label htmlFor={'quantity'}>Qty: </label>
                    <select id={'quantity-selector'} name={'quantity'} defaultValue={'1'}>
                        <option value={'1'}>1</option>
                    </select>
                </div>
            </div>
            <br/>
            <button id={'btn-add-cart'} className={'btn'} onClick={addToCart}><span id={'cart-icon'}></span>Add to Cart<span></span></button>

            <button id={'btn-buy-now'} className={'btn'}><span id={'buynow-icon'}></span>Buy Now<span></span></button>
            <br/>
            <div className={'sold-by-K'}>Sold by <a href="#">Amazing Deals (We record SN)</a> and <a href="#">Fulfilled
                by Gammazon</a>.
            </div>
            <br/>
            <div className={'paid-promo-K'}>
                <div id={'promo-img'} onMouseOver={popOverMouseIn} onMouseOut={popOverMouseOut}>
                    <div id={'promo-popover'} className={'hidden-div'}>
                        <span className={'promo-pointer'}></span>
                        <div className={'promo-popover-top'}>
                            <div className={'promo-close-btn'} onClick={popOverClickClose}><span
                                id={'promo-close-img'}></span></div>
                        </div>
                        <div className={'promo-popover-info'}><h1><b>Gammazon Primed Free Trial</b></h1>
                            <p>Fast, FREE Delivery is available to Primed members. To join, select "Try Gammazon Primed
                                and start saving today with Fast, FREE Delivery" below the Add to Cart button and
                                confirm your Primed free trial.</p>
                            <div className={'promo-list'}><b>Gammazon Primed members enjoy:</b>
                                <ul>
                                    <li>Cardmembers earn 5% Back at Gammazon.com with a Primed Credit Card.</li>
                                    <li>Earn 2% rewards on your debit spending with Primed Reload.</li>
                                    <li>Unlimited Free Two-Day Delivery</li>
                                    <li>Instant streaming of thousands of movies and TV episodes with Primed Video</li>
                                    <li>A Dwindle book to borrow for free each month - with no due dates</li>
                                    <li>Listen to over 2 million songs and hundreds of playlists</li>
                                    <li>Free two-hour delivery on groceries (in select cities), including quality fresh
                                        food and produce
                                    </li>
                                </ul>
                            </div>
                            <p><b>Important:</b> Your credit card will NOT be charged when you start your free trial or
                                if you cancel during the trial period. If you're happy with Gammazon Primed, do nothing.
                                At the end of the free trial, your membership will automatically upgrade to a monthly
                                membership.</p>
                        </div>
                    </div>
                </div>
                <b>Enjoy fast, FREE delivery, exclusive deals and Award-Winning movies & TV shows with Primed
                </b><br/><a href="#">Click here</a> and start saving today with <b>Fast, FREE Delivery</b>
            </div>
            <br/>
            <div className={'pricing-details'}>
                <div className={'protection-plan'}><b>Add a Protection Plan</b>
                    <br/>
                    <input type="radio" id="select-none" name="protection"/>
                    <label htmlFor="protection"> None</label>
                    <br/>
                    <input type="radio" id="two-year" name="protection"/>
                    <label htmlFor="protection"> 2-Year Protection for <span className={'red-K'}>$24.99</span></label>
                    <br/>
                    <input type="radio" id="three-year" name="protection"/>
                    <label htmlFor="protection"> 3-Year Protection for <span className={'red-K'}>$33.99</span></label>
                </div>
                <br/>
                <div>
                    <input type="checkbox" id="gift" name="gift"/>
                    <label htmlFor="gift">Add gift options</label>
                </div>
                <br/>
                <div className={'deliver-to'}>
                    <div id={'deliver-map'}></div>
                    <a href="#">Deliver to Austin 78703‌</a></div>
                <br/>
            </div>
            <button id={'btn-wishlist'} className={'btn'}>Add to List</button>
        </div>
    )
};

export default PriceAndDetails;