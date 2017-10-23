import React, { Component } from 'react';
import './styles/index.css';
import './styles/font-awesome.min.css'
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

class Products extends Component {

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

    showModal(id) {
    }

    addToCart(id) {

    }

    render() {
        return (
            <div id="app-products">
                <div class="section">
                    <div class="navtree">
                        <a href="/">Home</a> >
                                <a id="current" href="#">Rolls</a>
                    </div>
                    <div class="subpage">Rolls</div>
                </div>
                <div class="section">
                    <div class="flexbox flexwrap">
                        {this.rolls.map((i) =>
                            <div class="flexitem menuitem">
                                <a class="modal-trigger" href={"#modal" + i.id} onClick={this.showModal(i.id)}>
                                    <img width="250" height="175" src={this.pics[i.id]} alt="NA" />
                                    <span class="roll"><b>{i.name}</b><span>${i.price}</span></span>
                                    <p>{i.description}</p>
                                </a>
                                <div id={"modal" + i.id} class="modal">
                                    <div class="modal-content">
                                        <div class="flexbox flexwrap">
                                            <div class="flexitem menuitem">
                                                <img width="250" height="175" src={this.pics[i.id]} alt="NA" />
                                            </div>
                                            <div class="flexitem" id="itemdes">
                                                <div class="itemname">
                                                    <span id="itemtoadd">{i.name}</span>
                                                    <span class="fa fa-star rated"></span>
                                                    <span class="fa fa-star rated"></span>
                                                    <span class="fa fa-star rated"></span>
                                                    <span class="fa fa-star rated"></span>
                                                    <span class="fa fa-star rated"></span>
                                                </div>
                                                <p>{i.description}</p>
                                                <div class="roll addcart">
                                                    <span id="price">${i.price}</span>
                                                    <form>
                                                        <label for="qty">Quantity</label>
                                                        <input type="number" defaultValue="1" id="qty" min="1" max="50" />
                                                        <button type="button" onClick={this.addToCart(i.id)}>Add to cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>
                </div>
                <div class="section">
                </div>
                <div class="section">
                </div>
            </div>
        );
    }
}

export default Products;