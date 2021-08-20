import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types";


export function Carousel ({pictures}) {
    console.log('pictures', pictures[0]);
    
    const [slide, setSlide] = useState(0);
    const [change, setChange] = useState(0);
    
    //Function to change slide
    const addSlide = (n) => {
        if (slide + n >= pictures.length)
        setSlide(0);
        else if (slide + n < 0)
        setSlide(pictures.length - 1);
        else
        setSlide(slide + n);
    }

    useEffect(() => {

        let slides = document.getElementsByClassName("carousel-item");
        let slideIndex = slide;
    
        for (let i = 0; i < pictures.length; i++) { slides[i].style.display = "none";}
        if (slides[slideIndex] !== undefined) slides[slideIndex].style.display = "block";
        
    }, [slide]);

    
        return(
            <section className="carousel-wrapper">
                <div className="carousel-wrapper__inner">
                    {pictures.map((img, index) => (
                        <div className="carousel-img" key={index}>
                            <img src={img} alt="" />
                        </div>
                    ))}
                </div>
                <div className="controls-wrapper">
                    <div className="prev" onClick={(e) => { addSlide(-1); setChange(!change) }}>&#10094;</div>
                    <div className="next" onClick={(e) => { addSlide(1); setChange(!change) }}>&#10095;</div>
                </div>
            </section>
        )
}
Carousel.propTypes = {
    pictures: PropTypes.array
}

export default Carousel