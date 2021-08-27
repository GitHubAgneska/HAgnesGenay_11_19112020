import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class GalleryItem extends React.Component  {
    constructor(props) {
        super(props);
        this.path = "/rental/" + this.props.rental.id;
        // this.handleClick = this.handleClick.bind(this);
        // console.log('THIS PATH=', this.path);
    }

    // handleClick(id) { this.props.history.push("/rental/"+id); console.log(id)}
    render() {
        return  (
            <li>
                <Link to={this.path}>

                {/* <li onClick={() => this.handleClick(this.props.id)}> */}
                    <figure className="galleryItem">
                        <img src={this.props.rental.cover} alt="" />
                        <figcaption>{this.props.rental.title}</figcaption>
                    </figure>

                </Link>
            </li>
        ) 
    }
}
GalleryItem.propTypes = {
    id: PropTypes.number,
    cover: PropTypes.string,
    title: PropTypes.string
}

export default GalleryItem

