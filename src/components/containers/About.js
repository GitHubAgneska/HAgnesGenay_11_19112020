import CollapsingBlock from '../elements/CollapsingBlock'

const About =  () => {
    let sections = ['Fiabilité', 'Respect', 'Service', 'Responsabilité'];
    
    return (
        <section className="aboutPage-wrapper page">
            <div className="banner-pic banner-pic__about"></div>
            <div className="about-sections">
                { sections.map(i => (
                    <CollapsingBlock key={i} blockTitle={i} description="lorem ipsum"/>
                ))}
                
            </div>
        </section>
    )
}
export default About
