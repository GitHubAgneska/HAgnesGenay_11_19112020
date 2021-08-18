

export const GalleryItem =({rentals}) =>  {

        const title = rentals[0].title;
        const cover = rentals[1].cover;
        
        return  (
            
            <figure className="galleryItem" onClick="goTo">

                <img src={cover} alt="" />

                <figcaption>{title}</figcaption>
                
            </figure>

            )
    
}
