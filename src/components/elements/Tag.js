import { Fragment } from "react"
import PropTypes from "prop-types";

export default function Tag({tag}) {
    return(
        <Fragment>
            <p className="tag-text">{tag}</p>
        </Fragment>
    )
}

Tag.protoTypes = {
    tag: PropTypes.string
}