
import caret_down from '../../assets/logos/caret_down.png'
import caret_up from '../../assets/logos/caret_up.png'

let blockTitle = 'placeholder'
let blockContent = 'Lorem ipsum dolor si amet'

const CollapsingBlock = () => {

    return (
        <div className="collapsBlock collapsBlock-wrapper">
            <div className="collapsBlock__header">
                <h5>{blockTitle}</h5>
                <div className="collapsBlock__header__caret-wrapper">
                    <img src={caret_down} alt="caret logo open"></img>
                </div>
            </div>
            <div className="collapsBlock__body">
                <p>{blockContent}</p>
            </div>
            
        </div>
    )
}

export default CollapsingBlock