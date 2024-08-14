
export const Nuevo = () => {
    return (
        <>
            <section className="new section" id="new">
                <h2 className="section__title">New Categories</h2>

                <div className="new__container container grid">
                    <article className="new__card">
                        <img src="assets/img/new1.png" alt="new image" className="new__img" />

                        <a href="#" className="new__link">
                            <div className="new__data">
                                <h2 className="new__title">Hoodie & Sweatshirt</h2>
                                <span className="new__subtitle"> Winter collection </span>
                            </div>

                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </article>

                    <article className="new__card">
                        <img src="assets/img/new2.png" alt="new image" className="new__img" />

                        <a href="#" className="new__link">
                            <div className="new__data">
                                <h2 className="new__title">Pants & Jackets</h2>
                                <span className="new__subtitle"> Winter collection </span>
                            </div>

                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </article>

                    <article className="new__card">
                        <img src="assets/img/new3.png" alt="new image" className="new__img" />

                        <a href="#" className="new__link">
                            <div className="new__data">
                                <h2 className="new__title">Coats & Coat Sets</h2>
                                <span className="new__subtitle"> Winter collection </span>
                            </div>

                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </article>
                </div>
            </section>
        </>
    )
}
