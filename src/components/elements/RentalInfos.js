import CollapsingBlock from '../elements/CollapsingBlock'
import Tag from '../elements/Tag'
import Rating from '../elements/Rating'
import Carousel from '../elements/Carousel'

const RentalInfos =  () => {
    let placeholder='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg'
    return (
        <div className="rental-wrapper">

            <div className="rental--pics">
                <Carousel />
            </div>

            <div className="rental-presentation">
                <div className="rental-presentation__titles">
                    <h1>SOME TITLE</h1>
                    <h2>some location</h2>
                </div>

                <div className="rental-presentation__tags-list">
                    <Tag />
                    <Tag />
                    <Tag />
                </div>

                <div className="rental-presentation__owner">
                    <h3>some name</h3>
                    <div className="owner-pic">
                        <img src={placeholder} alt="" />
                    </div>
                </div>
                
                <div className="rental-presentation__rating">
                    <Rating />
                </div>
            </div>

            <div className="rental-presentation__description">
                <CollapsingBlock />
                <CollapsingBlock />
            </div>
        </div>
    )
}
export default RentalInfos