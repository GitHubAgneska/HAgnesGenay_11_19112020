import React, { Component } from 'react';
import PropTypes from "prop-types";


class Carousel extends Component {
    constructor(props){
        super(props);
        this.setupCarousel = this.setupCarousel.bind(this);
        this.carouselPics = [];
    }
    
    componentDidUpdate(){        
        console.log('HERE:',this.props.pictures)
    }

    setupCarousel(slide){
        //Function to change slide
       /*  let addSlide = (n) => {
            if (slide + n >= pics.length)
            setSlide(0);
            else if (slide + n < 0)
            setSlide(pics.length - 1);
            else
            setSlide(slide + n);
        }
        
        useEffect(() => {
            
            let slides = document.getElementsByClassName("carousel-item");
            let slideIndex = slide;
            try {
                for (let i = 0; i < pics.length; i++) { slides[i].style.display = "none";}
                if (slides[slideIndex] !== undefined) slides[slideIndex].style.display = "block";
            }
            catch(error) { console.log(error);}
            
        }, [slide]); */
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
                {/*   <div className="prev" onClick={(e) => { addSlide(-1); setChange(!change) }}>&#10094;</div>
                    <div className="next" onClick={(e) => { addSlide(1); setChange(!change) }}>&#10095;</div> */}
                </div>
            </section>
        )
    }
}
Carousel.propTypes = {
    pictures: PropTypes.array
}

export default Carousel