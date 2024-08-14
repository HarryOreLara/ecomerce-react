import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <h1 className="home__title">
                            Nueva Colección de Ropa <br />
                        </h1>

                        <p className="home__description">
                            La nueva colección de ropa de <br />
                            las mejores marcas este año.
                        </p>

                        <Link to="/collection" className="button__link">
                            Explorar <i className="ri-arrow-right-line"></i>
                        </Link>
                    </div>

                    <div className="home__images">
                        <img src="/src/assets/img/home1.jpg" alt="imagen de inicio" />
                        <img src="/src/assets/img/home2.jpg" alt="imagen de inicio" />
                    </div>
                </div>
            </section>
        </>
    )
}

