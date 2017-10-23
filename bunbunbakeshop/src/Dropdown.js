import React, { Component } from 'react';
import './styles/index.css';
import './styles/font-awesome.min.css';
import App from './App'

class Dropdown extends Component {

    getCartPrice() {
        return "0.00";
    }

    renderDropDownCart() {

    }

    render() {
        return (
            <div class="cart-container">
                <div class="cart-contents" id="cart-contents">
                    <div class="cardhead roll">
                        <span>Total: </span><span id="cartprice">${this.getCartPrice()}</span>
                    </div>
                    <ul class="cartrolls" id="cartrolls">
                        {this.renderDropDownCart()}
                    </ul>
                    <button type="button" onClick={(ev) => this.props.changeState(2)}>Go to cart</button>
                </div>
            </div>
        );
    }
}

export default Dropdown;