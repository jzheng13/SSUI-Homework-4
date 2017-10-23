import React, { Component } from 'react';
import './styles/index.css';
import './styles/font-awesome.min.css'

class Cart extends Component {
    render() {
        return (
            <div id="app-cart">
                <div class="section">
                    <div class="navtree">
                        <a href="index.html">Home</a> >
                            <a id="current" href="cart.html">Cart</a>
                    </div>
                    <div class="subpage">Cart</div>
                </div>
                <div class="section">
                    <div id="cartlist" class="flexbox flexwrap">
                        <div id="cartempty" class="flexitem" hidden>
                            <span>There are no items in your cart.</span>
                        </div>
                        <div class="flexitem" id="menuitem">
                            <img width="200" height="140" src="resources/images/default1.jpg" alt="NA" />
                        </div>
                        <div class="flexitem" id="itemdes">
                            <div class="subsubheading">
                                <span id="rolltype">Original</span>
                            </div>
                            <p>The classic.</p>
                            <div class="roll addcart">
                                <span id="subtotal">$3.00</span>
                                <form>
                                    <label for="qty">Quantity</label>
                                    <input type="number" id="qty" value="2" min="1" max="50" />
                                    <button type="button" onclick="removeFromCart()">Remove</button>
                                </form>
                            </div>
                        </div>
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
                                    $6.00
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