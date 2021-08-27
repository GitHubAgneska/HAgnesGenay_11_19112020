/* eslint-disable no-useless-constructor */
import React  from 'react';
import PropTypes from "prop-types";


export default class CarouselItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="carousel-img" style={{width:this.props.width}}>
                <img src={this.props.pic} alt=""/>
            </div>
        )
    }
}
CarouselItem.propTypes = { 
    pic: PropTypes.string,
    width:PropTypes.number
}

