

export const GalleryItem =({rental}) =>  {
        
        return  (
            
            <figure className="galleryItem" onClick="goTo">
                <img src={rental.cover} alt="" />
                <figcaption>{rental.title}</figcaption>
            </figure>

        ) 
}
