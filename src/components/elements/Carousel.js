import React, { Fragment } from 'react';
import { useState } from 'react';
import CarouselItem from "./CarouselItem";

const Carousel = (props) => {
/* const Carousel = ({children}) => { */
    const [activeIndex, setActiveIndex] = useState(0);
    const hasOnlyOnePicture = props.pictures.length === 1;

    const updateIndex = (newIndex) => {
        /* using React.Children
        if ( newIndex < 0 ) { newIndex = Children.count(children) ; }
        else if (newIndex > Children.count(children) ){ newIndex = 0; } */
        if ( newIndex < 0 ) { newIndex = (props.pictures).length -1 ; }
        else if (newIndex > (props.pictures).length -1 ){ newIndex = 0; }

        setActiveIndex(newIndex);
        console.log('CURRENT INDEX===', newIndex)
    }

    return (
        <div className="carousel-wrapper">

            { !hasOnlyOnePicture? (

                <div className="carousel-wrapper__inner">
                
                    <div className="controls-wrapper">
                        <div className="control prev" onClick={() => { updateIndex(activeIndex - 1) }}>&#10094;</div>
                        <div className="control next" onClick={() => { updateIndex(activeIndex + 1) }}>&#10095;</div>
                    </div>
                    
                    <div className="pic-wrapper" style={{ transform: `translateX(-${activeIndex* 100}%)`}}>
                        {props.pictures.map((pic) => (<CarouselItem pic={pic} key={Math.random()} /> ))}
                        {/* using React.Children - {Children.map(children, (child, index) => { return React.cloneElement(child, {width: "100%"}) })} */}
                    </div>

                </div>
                ): 
                <div className="carousel-wrapper__inner">
                    <div className="pic-wrapper"  style={{ transform: `translateX(-${activeIndex* 100}%)`}}>
                        <CarouselItem pic={props.pictures[0]} key={Math.random()} />
                    </div>
                </div>
            }

        </div>
    )
}
export default Carousel


// note - it is possible to pass event handlers from parent to child
// to keep the child stateless (as much as possible) : 
// passed in props if class-based component / as arguments if functional component
/* class Carousel extends Component {
    constructor(props){
        super(props);
        this.setupCarousel = this.setupCarousel.bind(this);
        this.state = {
            pics: [],
            activeIndex: 0
        }
    }

    
    componentDidUpdate(){  // runs after the component output has been rendered to the DOM
        console.log('HERE:',this.props.pictures);
    }

    setupCarousel(){

        let pics = (this.props.pictures);
        let slides = document.getElementsByClassName("carousel-img");

        let changeSlide = (n) => {

            if (slides[i] + n >= pics.length) setSlide(0);
            else if (slide + n < 0) setSlide(pics.length - 1);
            else setSlide(slide + n);
        }
        
        try {
            for (let i = 0; i < pics.length; i++) { slides[i].style.display = "none";}
            if (slides[slideIndex] !== undefined) slides[slideIndex].style.display = "block";
        }
        catch(error) { console.log(error);}
    }
        

    render(){
        return(
            <section className="carousel-wrapper">
                <div className="carousel-wrapper__inner">
                    {this.props.pictures?this.props.pictures.map((img, index) => (
                        <div className="carousel-img" key={index}>
                            <img src={img} alt="" />
                        </div>
                    )):
                    <div className="carousel-img" key={Math.random()}>
                        <img src={this.props.cover} alt="" />
                    </div>
                    }
                </div>
                <div className="controls-wrapper">
                    <div className="prev" onClick={(e) => { addSlide(-1); setChange(!change) }}>&#10094;</div>
                    <div className="next" onClick={(e) => { addSlide(1); setChange(!change) }}>&#10095;</div>
                </div>
            </section>
        )
    }
}
Carousel.propTypes = {
    pictures: PropTypes.array
}

export default Carousel */