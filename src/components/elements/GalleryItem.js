

export const GalleryItem =({rental}) =>  {
        
        return  (
            <li>
                <figure className="galleryItem" onClick="goTo">
                    <img src={rental.cover} alt="" />
                    <figcaption>{rental.title}</figcaption>
                </figure>
            </li>
        ) 
}
