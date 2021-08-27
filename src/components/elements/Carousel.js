import React  from 'react';
import CarouselItem from "./CarouselItem";
import PropTypes from "prop-types";

export default class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            activeIndex: 0,
        }
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(newIndex) { 
        if (!this.newIndex)this.newIndex= 0;
        if ( newIndex < 0 ) { newIndex = (this.props.pictures).length -1 ; }
        else if (newIndex > (this.props.pictures).length -1 ){ newIndex = 0; }
        this.setState({activeIndex:newIndex});
    }

    render() {
        return (

            <div className="carousel-wrapper">
    
                { this.props.pictures.length > 1? (
    
                    <div className="carousel-wrapper__inner">
                    
                        <div className="controls-wrapper">
                            <div className="control prev" onClick={() => { this.updateIndex(this.state.activeIndex - 1) }}>&#10094;</div>
                            <div className="control next" onClick={() => { this.updateIndex(this.state.activeIndex + 1) }}>&#10095;</div>
                        </div>
                        
                        <div className="pic-wrapper" style={{ transform: `translateX(-${this.state.activeIndex* 100}%)`}}>
                            {this.props.pictures.map((pic) => (<CarouselItem pic={pic} key={Math.random()} /> ))}
                        </div>
    
                    </div>
                    ): 
                    <div className="carousel-wrapper__inner">
                        <div className="pic-wrapper"  style={{ transform: `translateX(-${this.state.activeIndex* 100}%)`}}>
                            <CarouselItem pic={this.props.pictures[0]} key={Math.random()} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}
Carousel.propTypes = {
    pictures: PropTypes.array
}


