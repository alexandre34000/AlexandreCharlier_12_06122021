
import { Link } from 'react-router-dom'

function NotFound() {

    return (
        <div className="container-notFound">
            <section className="content-notFound">
                <h1 className="notFound-title">404</h1>
                <p className="notFound-text">Oups! La page que vous demandez n'existe pas</p>
                <div className="notFound-link">
                    <Link className="notFound-link__a" to="/">Retourner sur la page d'acceuil </Link>
                </div>
            </section>
        </div>
    )
}


export default NotFound