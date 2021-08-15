import star  from '../../assets/logos/star.png'
import noStar from '../../assets/logos/noStar.png'

export default function Rating() {
    return(
        <div className="rating">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={noStar} alt=""/>
            <img src={noStar} alt=""/>
        </div>
    )
}