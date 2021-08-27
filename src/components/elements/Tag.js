import React, { Fragment } from "react"
import PropTypes from "prop-types";

export default class Tag extends React.Component {

    render() {
        return(
            <Fragment>
                <p className="tag-text">{this.props.tag}</p>
            </Fragment>
        )
    }
}

Tag.protoTypes = {
    tag: PropTypes.string
}

