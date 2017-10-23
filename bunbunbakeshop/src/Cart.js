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

class Cart extends Component {

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
        this.notNil = this.notNil.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    notNil(item) {
        return (item.id in window.localStorage) && (window.localStorage.getItem(item.id) > 0);
    }

    removeFromCart(id) {
        window.localStorage.setItem(id, 0);
        this.props.updateCart();
    }

    render() {
        return (
            <div id="app-cart">
                <div class="section">
                    <div class="navtree">
                        <a href="#" onClick={(ev) => this.props.changeState(0)}>Home</a> >
                            <a id="current" href="#">Cart</a>
                    </div>
                    <div class="subpage">Cart</div>
                </div>
                <div class="section">
                    <div id="cartlist">
                        {this.rolls.filter(this.notNil).map((i) =>
                            <div class="flexbox">
                                <div class="flexitem" id="menuitem">
                                    <img width="200" height="140" src={this.pics[i.id]} alt="NA" />
                                </div>
                                <div class="flexitem" id="itemdes">
                                    <div class="subsubheading">
                                        <span id="rolltype">{i.name}</span>
                                    </div>
                                    <p>{i.description}</p>
                                    <div class="roll addcart">
                                        <span id="subtotal">${i.price}</span>
                                        <form>
                                            <label for="qty">Quantity</label>
                                            <input type="number" id="qty" value={window.localStorage.getItem(i.id)} min="1" max="50" />
                                            <button type="button" onClick={(ev) => this.removeFromCart(i.id)}>Remove</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div class="break"></div>
                <div class="section">
                    <div class="container">
                        <div class="roll">
                            <div class="subsubheading">
                                Total
                                </div>
                            <div class="subsubheading">
                                <div id="totalprice">
                                    ${this.props.getCartPrice()}
                                    </div>
                                <button> Checkout </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section">
                </div>
            </div>
        );
    }
}

export default Cart;