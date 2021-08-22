import { Component } from "react";
import PropTypes from "prop-types";
import caret_down from '../../assets/logos/caret_down.png'

let blockTitle = 'placeholder'
let blockContent = 'Lorem ipsum dolor si amet'

// using class based component here, for it needs its own state
// and has event handlers
class CollapsingBlock extends Component  {

    constructor(props) {
        super(props);
        this.state = { blockDisplay: false };
        /* binding event to class */
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState((currentState) => ({ blockDisplay: !currentState.blockDisplay}))
    }
    
    render() {
        return (
            <div className="collapsBlock collapsBlock-wrapper">
                <div className="collapsBlock__header">
                    <h5>{blockTitle}</h5>
                    <div className="collapsBlock__header__caret-wrapper">
                        <img src={caret_down} alt="caret logo open" onClick={this.toggle}></img>
                    </div>
                </div>

                {this.state.blockDisplay?(
                    <div className="collapsBlock__body--active">
                        <p>{this.props.description}</p>
                    </div>
                ):( null )}
            </div>
        )
    }
}

CollapsingBlock.propTypes = {
    /* coming from rentalInfos component */ 
    description: PropTypes.string,
    equipment: PropTypes.array,
    /* coming from about component */ 
    content: PropTypes.string
}

export default CollapsingBlock