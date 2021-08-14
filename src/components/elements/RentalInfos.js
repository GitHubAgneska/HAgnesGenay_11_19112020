import CollapsingBlock from '../elements/CollapsingBlock'
import Tag from '../elements/Tag'
import Rating from '../elements/Rating'
import Carousel from '../elements/Carousel'

const RentalInfos =  () => {
    
    return (
        <div className="rental-wrapper">

            <div className="rental--pics">
                <Carousel />
            </div>

            <div className="rental--presentation">
                <div className="rental--titles">
                    <h5>SOME TITLE</h5>
                    <h6>some location</h6>
                    <h6>some name</h6>
                </div>
                <div className="tags-list">
                    <Tag />
                </div>
                <div className="rating">
                    <Rating />
                </div>
            </div>
            <div className="rental--blocks">
                <CollapsingBlock />
                <CollapsingBlock />
            </div>
        </div>
    )
}
export default RentalInfos