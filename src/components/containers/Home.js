import React from 'react'
import HomeBanner from '../elements/HomeBanner'
import Gallery from '../elements/RentalsGallery'

export class Home extends React.Component {
    render() {
        return (
            <div id="homepage" className="homepage-wrapper page">
                <HomeBanner />
                <Gallery />
            </div>
        )
    }
}


export default Home