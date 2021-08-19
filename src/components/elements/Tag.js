import { Fragment } from "react"
import PropTypes from "prop-types";

export default function Tag({tag}) {
    return(
        <Fragment>
            <a href="/" id="" className="tag" tabIndex="0">{tag}</a>
        </Fragment>
    )
}

Tag.protoTypes = {
    tag: PropTypes.string
}