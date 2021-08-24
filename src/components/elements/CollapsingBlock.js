import { Component } from "react";
import PropTypes from "prop-types";
import caret_down from '../../assets/logos/caret_down.png'

// using class based component here, for it needs its own state
// and has event handlers
class CollapsingBlock extends Component  {

    constructor(props) {
        super(props);

        // const {blockContent, setBlockContent} = props;
       //  setBlockContent(blockContent, this.props.blockContent)
        this.state = { blockDisplay: false};
        this.toggle = this.toggle.bind(this); /* binding event to constructor */
        
    /*  if ( props.isArray()){ console.log('IS ARRAY')}
        else { console.log('IS STRING')} */
        // let blockContent
    }

    toggle(){
        this.setState((currentState) => ({ blockDisplay: !currentState.blockDisplay}))
    }
    
    render() {
        
        return (
            <div className="collapsBlock collapsBlock-wrapper">
                <div className="collapsBlock__header">
                    <h4>{this.props.blockTitle}</h4>
                    <div className="collapsBlock__header__caret-wrapper">
                        <img src={caret_down} alt="caret logo open" onClick={this.toggle}></img>
                    </div>
                </div>

                {this.state.blockDisplay?(
                    <div className="collapsBlock__body--active">
                        { this.props.description ? ( <p>{this.props.description}</p> ):
                        
                        this.props.equipments?(
                            <ul>
                                {this.props.equipments.map((item) => (
                                    <li key={Math.random()} item={item}><p>{item}</p></li> ))}
                            </ul>
                        ):(null) }
                    </div>
                ):( 
                    <div className="collapsBlock__body"></div> // necessary for css transition
                )}
            </div>
        )
    }
}

CollapsingBlock.propTypes = {
    blockContent: PropTypes.string,
    blockTitle: PropTypes.string,

    description: PropTypes.string,
    equipment: PropTypes.array

}

export default CollapsingBlock