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

class Dropdown extends Component {

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
    }

    notNil(item) {
        return (item.id in window.localStorage) && (window.localStorage.getItem(item.id) > 0);
    }

    render() {
        return (
            <div class="cart-container">
                <div class="cart-contents" id="cart-contents" onMouseEnter={(ev) => this.props.displayCart(true)} onMouseLeave={(ev) => this.props.displayCart(false)}>
                    <div class="cardhead roll">
                        <span>Total: </span><span id="cartprice">${this.props.getCartPrice}</span>
                    </div>
                    <ul class="cartrolls" id="cartrolls">
                        {this.rolls.filter(this.notNil).map((i) =>
                            <li class="roll">
                                <img class="cartimage" src={this.pics[i.id]} />
                                <div>
                                    <span class="cartitemname"><b>{i.name}</b></span>
                                    <span class="cartitemprice">${i.price}</span>
                                    <span class="cartitemqty">x {parseInt(window.localStorage.getItem(i.id))}</span>
                                </div>
                            </li>
                        )}
                    </ul>
                    <button type="button" onClick={(ev) => this.props.changeState(2)}>Go to cart</button>
                </div>
            </div>
        );
    }
}

export default Dropdown;