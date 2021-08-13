import notFound from "../../assets/imgs/notFound.png"

const NotFoundPage =  () => {
    
    return (
        <section className="notFound-wrapper">
            <div className="notFound-pic-wrapper">
                <img src={notFound} alt="not found logo" />
            </div>
        </section>
    )
}
export default NotFoundPage