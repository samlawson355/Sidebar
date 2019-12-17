import React from 'react';
import ReactDOM from 'react-dom';
import sellers from './data/sellers.js';
import Social from './components/Social.jsx';
import OtherSellers from './components/OtherSellers.jsx';
import PriceAndDetails from './components/PriceAndDetails.jsx';
import axios from 'axios';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            allProducts: {},
            currentProduct: {
                _id: "5dee77511c9d440000f1b68c",
                primaryKey: 1,
                name: "Nestle Pure Life Purified Water, 16.9 fl oz. Plastic Bottles (12 count)",
                price: "2.23",
                stock: 70
            },
            stock: [],
            otherSellers: [],

        };
    }

    componentDidMount() {
        axios.get('http://buyboxapi.us-west-2.elasticbeanstalk.com/allProducts')
            .then((data) => {
                console.log(data.data);
                this.setState({
                    allProducts: data.data
                });
            })
            .then(() => {
                this.getId();
            })
            .then(() => {
                this.randomizeSellers();
            })
            .then(() => {
                this.populateQuantity();
            })
            .catch(err => {
                console.error(err);
            })
    }

    randomizeSellers() {
        let moreSellers = [];
        for (let i = 0; i < 3; i++) {
            moreSellers.push(sellers[this.getRandomInt(15)]);
        }
        this.setState({
            otherSellers: moreSellers
        })
    }

    getRandomInt(num) {
        return Math.floor(Math.random() * Math.floor(num));
    }

    getId() {
        let idText = window.location.search;
        let croppedId = idText.substring((idText.indexOf('=') + 1));

        croppedId = Number(croppedId);

        if (this.state.allProducts === {}) {
            return null;
        } else {
            this.state.allProducts.forEach(e => {
                if (e.primaryKey === croppedId) {
                    this.setState({
                        currentProduct: e
                    })
                }
            })
        }
    }

    populateQuantity() {
        let sel = document.getElementById('quantity-selector');
        let opt = null;
        for (let i = 2; i < this.state.currentProduct.stock + 1; i++) {
            opt = document.createElement('option');
            opt.value = `${i}`;
            opt.innerHTML = `${i}`;
            sel.appendChild(opt);
        }
    }

    render() {
        return (
            <div>
                <div className={'buybox'}>
                    <PriceAndDetails current={this.state.currentProduct}/>
                </div>
                <Social/>
                <OtherSellers shops={this.state.otherSellers} current={this.state.currentProduct}/>
            </div>
        );
    }
}

ReactDOM.render(<Cart/>, document.getElementById('kytrabuybox'));
