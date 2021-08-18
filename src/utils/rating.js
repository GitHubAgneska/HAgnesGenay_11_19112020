import star  from '../../assets/logos/star.png'
import noStar from '../../assets/logos/noStar.png'

let res = ``;

const rating = (star, nostar, int) => {

    let one =  `<img src={star} alt=""/>`;
    let zero = `<img src={noStar} alt=""/>`;
    res = one.repeat(int) + zero.repeat(5-int);
    return res
}
export default rating