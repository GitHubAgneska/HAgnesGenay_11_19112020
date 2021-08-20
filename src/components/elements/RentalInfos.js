import CollapsingBlock from '../elements/CollapsingBlock'
import Tag from '../elements/Tag'
import Rating from '../elements/Rating'
import Carousel from '../elements/Carousel'
import PropTypes from "prop-types";

const RentalInfos =  ({cover, title,location, pictures, description, hostName, hostPicture, rating, equipment, tags }) => {

   /*  let placeholder='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg' */
    console.log('pictures in rentalInfos component==',pictures)
    console.log('rating==', rating)
    console.log('title==', title)
    return (
        <div className="rental-wrapper">

            <div className="rental--pics">
                <Carousel pics={pictures}/>
            </div>

            <div className="rental-presentation">
                <div className="rental-presentation__titles">
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                </div>

                <div className="rental-presentation__tags-list">
                    <ul>
                        {tags.map(i => (
                            <li key={i}><Tag tag={i} className="tag-wrapper"/></li>
                        ))}
                    </ul>
                </div>

                <div className="rental-presentation__owner">
                    <h3>{hostName}</h3>
                    <img src={hostPicture} alt={hostName} />
                </div>
                
                <div className="rental-presentation__rating">
                    <Rating rating={rating}/>
                </div>
                
            </div>

            <div className="rental-presentation__description">
                <CollapsingBlock description={description} />
                <CollapsingBlock  equipment={equipment} />
            </div>
        </div>
    )
}

RentalInfos.propTypes = { 
    cover: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    pictures: PropTypes.array,
    description: PropTypes.string,
    hostName: PropTypes.string,
    hostPicture: PropTypes.string,
    rating: PropTypes.string,
    equipment: PropTypes.array,
    tags: PropTypes.array
}
export default RentalInfos