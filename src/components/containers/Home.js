import React , {Suspense} from 'react'
import HomeBanner from '../elements/HomeBanner'
import Gallery from '../elements/RentalsGallery'

export default class Home extends React.Component {
    render() {
        return (
            <div id="homepage" className="homepage-wrapper page">
                <HomeBanner />
                <Suspense fallback={"loading.."}>
                    <Gallery />
                </Suspense>
            </div>
        )
    }
}
