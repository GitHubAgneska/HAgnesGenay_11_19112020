import PropTypes from "prop-types";
import star  from '../../assets/logos/star.png'
import noStar from '../../assets/logos/noStar.png'

let stars = [];
export function rate(n){
    for ( let i = 0; i < parseInt(n); i++ ) {
        console.log('parseInt({rating})==', parseInt(n))
        stars.push(i)
        /* stars.push(<img src={star} key={i} alt="" />) */
    }
    for ( let j = parseInt(n); j < 5; j++ ) {
        stars.push(j)
        /* stars.push(<img src={noStar} key={j}  alt="" />) */
    }
}

export default function Rating({rating}) {

/*     let starsCount = parseInt({rating}); console.log(starsCount)
    let noStarCount = 5 - parseInt({rating}); 
*/ 
    rate({rating});
    console.log('STARS==', stars)

    return <div className="rating">{stars}</div>
    
}

Rating.protoTypes = {
    rating: PropTypes.string
}