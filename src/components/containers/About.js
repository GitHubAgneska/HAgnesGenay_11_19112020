import  React from "react";
import CollapsingBlock from '../elements/CollapsingBlock'
import about from '../../data/about.json';


export default class About extends React.Component {
    render() {
        return (
            <section className="aboutPage-wrapper page">
                <div className="banner-pic banner-pic__about"></div>
                <div className="about-sections">
                    { about.about.map(i => (
                        <CollapsingBlock key={i.title} blockTitle={i.title} description={i.description} />
                    ))}
                    
                </div>
            </section>
        )
    }
}
