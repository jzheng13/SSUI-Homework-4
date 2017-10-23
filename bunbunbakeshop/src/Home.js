import React, { Component } from 'react';
import './styles/index.css';
import './styles/font-awesome.min.css';
import classic from './resources/images/classic.jpg';
import cinnamon from './resources/images/cinnamon.jpg';
import cupcakish from './resources/images/cupcakish.jpg';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div class="section">
                    <div class="flexbox flexwrap">
                        <div class="flexitem">
                            <span class="iconcat"><i class="fa fa-cutlery fa-3x" aria-hidden="true"></i></span><br /><br />
                            <img width="250" height="175" src={classic} alt="NA" />
                            <p>Our signature classic cinnamon rolls are the favorites of every Pittsburgher out there! We use top quality ingredients, importing the cinnamons from Indonesia. The classic recipe has been refined for decades and we trust that no one can resist the taste of our rolls. As if.</p>
                        </div>
                        <div class="flexitem">
                            <span class="iconcat"><i class="fa fa-lightbulb-o fa-3x" aria-hidden="true"></i></span><br /><br />
                            <img width="250" height="175" src={cinnamon} alt="NA" />
                            <p>We have got a wide selection of different flavours for you to choose from. Can't find one you like or got ideas for a new flavour? Tell us! We'll be happy to custom bake one for you... at a premium of course. </p>
                        </div>
                        <div class="flexitem">
                            <span class="iconcat"><i class="fa fa-truck fa-3x" aria-hidden="true"></i></span><br /><br />
                            <img width="250" height="175" src={cupcakish} alt="NA" />
                            <p>We ship fresh cinnamon rolls across the whole of the United States. However, we cannot guarantee that the cinnamon rolls will still be edible upon arrival. Additionally, please refer to the delivery page for more details about time frame as well as costs. </p>
                        </div>
                    </div>
                </div>
                <div class="section"></div>
                <div class="section"></div>
            </div>
        );
    }
}

export default Home;