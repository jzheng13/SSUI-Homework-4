import React, { Component } from 'react';
import './styles/index.css';
import './styles/font-awesome.min.css';
import Item from './Item';
import Menu from './Menu';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: -1,
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView(id) {
        this.setState({
            item: id,
        });
    }

    render() {
        return (
            <div>
                {this.state.item < 0 ? <Menu changeView={this.changeView} changeState={this.props.changeState} /> : <Item data={this.state.item} changeView={this.changeView} updateCart={this.props.updateCart} changeState={this.props.changeState}/>}
            </div>
        );
    }
}

export default Products;