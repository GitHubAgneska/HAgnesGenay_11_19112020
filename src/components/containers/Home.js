import React from 'react'
import HomeBanner from '../elements/HomeBanner'

export class Home extends React.Component {
    render() {
        return (
            <div id="homepage" className="homepage-wrapper page">
                <HomeBanner />
            </div>
        )
    }
}


export default Home