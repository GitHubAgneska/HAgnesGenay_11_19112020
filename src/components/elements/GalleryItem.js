import { useHistory } from "react-router-dom";

export const GalleryItem =({rental}) =>  {

    const history = useHistory();

    function handleClick() { history.push("/rental"); }
        
        return  (
            <li onClick={handleClick} data-id={rental.id}>
                <figure className="galleryItem">
                    <img src={rental.cover} alt="" />
                    <figcaption>{rental.title}</figcaption>
                </figure>
            </li>
        ) 
}
