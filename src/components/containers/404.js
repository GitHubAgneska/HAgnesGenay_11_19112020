import  React from "react";
import notFound from "../../assets/imgs/notFound.png"
import { Link } from 'react-router-dom';


class NotFoundPage extends React.Component {

    render() {

        return (
            <section className="notFoundPage-wrapper page">
                <div className="notFound-pic-wrapper">
                    <img src={notFound} alt="not found logo" />
                </div>
                <h1>Oup! La page que vous demandez n'existe pas</h1>
                <Link to="/"><h2>Retourner à la page d'accueil</h2></Link>
            </section>
        )
    }
}

export default NotFoundPage