
let blockTitle = 'placeholder'
let blockContent = 'Lorem ipsum dolor si amet'

const CollapsingBlock = () => {

    return (
        <div className="collapsBlock collapsBlock-wrapper">
            <div className="collapsBlock--header">
                <h5>{blockTitle}</h5>
            </div>
            <div className="collapsBlock--body">
                <p>{blockContent}</p>
            </div>
            
        </div>
    )
}

export default CollapsingBlock