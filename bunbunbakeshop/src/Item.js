import React, { Component } from 'react';
import './styles/index.css';
import './styles/font-awesome.min.css';
import products from './rolls.json';
import productPic1 from './resources/images/default1.jpg';
import productPic2 from './resources/images/default2.jpg';
import productPic3 from './resources/images/default3.jpg';
import productPic4 from './resources/images/default4.jpg';
import productPic5 from './resources/images/default5.jpg';
import productPic6 from './resources/images/default6.jpg';
import productPic7 from './resources/images/default7.jpg';
import productPic8 from './resources/images/default8.jpg';
import productPic9 from './resources/images/default9.jpg';
import productPic10 from './resources/images/default10.jpg';
import productPic11 from './resources/images/default11.jpg';
import productPic12 from './resources/images/default12.jpg';
import productPic13 from './resources/images/default13.jpg';
import productPic14 from './resources/images/default14.jpg';
import productPic15 from './resources/images/default15.jpg';


class Item extends Component {

    constructor(props) {
        super(props);
        this.rolls = products.rolls;
        this.pics = [productPic1,
            productPic2,
            productPic3,
            productPic4,
            productPic5,
            productPic6,
            productPic7,
            productPic8,
            productPic9,
            productPic10,
            productPic11,
            productPic12,
            productPic13,
            productPic14,
            productPic15];
        this.item = this.props.data;
        this.state = {
            qty: 1,
        }
        this.setQty = this.setQty.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    setQty(n) {
        this.setState({qty: n});
    }

    addToCart(id) {
        if (this.item in window.localStorage) {
            var n = parseInt(this.state.qty) + parseInt(window.localStorage.getItem(id));
            window.localStorage.setItem(id, n);
        } else {
            window.localStorage.setItem(id, parseInt(this.state.qty));
        }
        this.props.updateCart();
    }

    render() {
        return (
            <div>
                <div class="section">
                    <div class="navtree">
                        <a href="/">Home</a> >
                            <a href="#" onClick={(ev) => this.props.changeView(-1)}>Rolls</a> >
                            <a id="current" href="#">{this.rolls[this.item].name}</a>
                    </div>
                    <div class="flexbox flexwrap">
                        <div class="flexitem" id="menuitem">
                            <img width="250" height="175" src={this.pics[this.rolls[this.item].id]} alt="NA" />
                        </div>
                        <div class="flexitem" id="itemdes">
                            <div class="itemname">
                                <span id="itemtoadd">{this.rolls[this.item].name}</span>
                                <span class="fa fa-star rated"></span>
                                <span class="fa fa-star rated"></span>
                                <span class="fa fa-star rated"></span>
                                <span class="fa fa-star rated"></span>
                                <span class="fa fa-star rated"></span>
                            </div>
                            <p>{this.rolls[this.item].description}</p>
                            <div class="roll addcart">
                                <span id="price">${this.rolls[this.item].price}</span>
                                <form>
                                    <label for="qty">Quantity</label>
                                    <input type="number" defaultValue={this.state.qty} value={this.state.qty} id="qty" min="1" max="50" onChange={(ev) => this.setQty(ev.target.value)} />
                                    <button type="button" onClick={(ev) => this.addToCart(this.rolls[this.item].id)}>Add to cart</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">

                </div>
                <div class="section">

                </div>
                <div class="section">
                </div>
            </div>
        );
    }
}

export default Item;