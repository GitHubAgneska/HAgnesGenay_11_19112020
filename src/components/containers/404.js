import notFound from "../../assets/imgs/notFound.png"

const NotFoundPage =  () => {
    
    return (
        <section className="notFoundPage-wrapper page">
            <div className="notFound-pic-wrapper">
                <img src={notFound} alt="not found logo" />
            </div>
            <h1>Oup! La page que vous demandez n'existe pas</h1>
            <h2>Retourner à la page d'accueil</h2>
        </section>
    )
}
export default NotFoundPage