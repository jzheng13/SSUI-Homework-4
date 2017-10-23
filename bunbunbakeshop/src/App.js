import React, { Component } from 'react';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Dropdown from './Dropdown';
import './styles/index.css';
import './styles/font-awesome.min.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            showCart: false,
            cartItems: 0,
        };
        this.changeState = this.changeState.bind(this);
    }

    renderPageView() {
        if (this.state.page === 0)
            return <Home />
        if (this.state.page === 1)
            return <Products />
        if (this.state.page === 2)
            return <Cart />
    }

    changeState(pn) {
        this.setState({
            page: pn
        });
    }

    getCartItems() {
        return 0;
    }

    render() {
        return (
            <div id="index">
                <div class="navbar">
                    <div class="container">
                        <div class="roll">
                            <form>
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <input type="text" name="search" placeholder="Search" />
                            </form>
                            <div class="cart" onClick={(ev) => this.setState({ showCart: !this.state.showCart })}>
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span class="badge" id="cartitems" data-val={this.state.cartItems}></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {this.state.showCart ? <Dropdown changeState={this.changeState}/> : <div></div>}

                <a href="index.html">
                    <div class="banner">
                        <div id="bannercontents">
                            <span class="name">Bun Bun Bake Shop</span>
                            <span class="subtitle">We're on a roll!</span>
                        </div>
                    </div>
                </a>

                <div class="section">
                    <div class="container">
                        <div class="flexbox flexrow">
                            <div id="placeholder"></div>
                            <ul class="sidenav">
                                <li><a href="#">&nbsp;&nbsp;About</a></li>
                                <li><a href="#" onClick={(ev) => this.setState({ page: 1 })}>&nbsp;&nbsp;Rolls</a></li>
                                <li><a href="#">&nbsp;&nbsp;Delivery</a></li>
                            </ul>
                            <div class="page-contents">
                                {this.renderPageView()}
                            </div>
                        </div>
                    </div>
                </div>


                <footer>
                    <div class="container">
                        <div class="contact">
                            <b>Bun Bun Bake Shop</b><br />
                            4321 Murray Ave <br />
                            Pittsburgh, PA 15217 <br />
                            &#128222; (412) 123-4567 <br />
                            &#128231; rollaboat@bunbunbakes.com <br />
                            &#128336; 10:00 AM - 17:00 PM on weekdays
                        </div>
                    </div>
                    <div class="copyright">
                        &copy; Created by Jia Zheng (jzheng2@andrew.cmu.edu) for F17 SSUI Assignment 3.
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
