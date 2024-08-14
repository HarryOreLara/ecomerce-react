
export const Products = () => {
    return (
        <>
            <section className="products section" id="products">
                <h2 className="section__title">Best Products</h2>

                <div className="products__container container swiper">
                    <div className="swiper-wrapper">
                        <article className="products__card swiper-slide">
                            <img
                                src="assets/img/product1.jpg"
                                alt="product image"
                                className="products__img"
                            />

                            <h2 className="products__title">Gotland black Jacket</h2>
                            <span className="products__price"> $124.99 </span>
                        </article>

                        <article className="products__card swiper-slide">
                            <img
                                src="assets/img/product2.jpg"
                                alt="product image"
                                className="products__img"
                            />

                            <h2 className="products__title">Black Sports Shorts</h2>
                            <span className="products__price"> $34.99 </span>
                        </article>

                        <article className="products__card swiper-slide">
                            <img
                                src="assets/img/product3.jpg"
                                alt="product image"
                                className="products__img"
                            />

                            <h2 className="products__title">Knox Quilted Jacket</h2>
                            <span className="products__price"> $97.99 </span>
                        </article>

                        <article className="products__card swiper-slide">
                            <img
                                src="assets/img/product4.jpg"
                                alt="product image"
                                className="products__img"
                            />

                            <h2 className="products__title">Blue Sport Pants</h2>
                            <span className="products__price"> $69.99 </span>
                        </article>

                        <article className="products__card swiper-slide">
                            <img
                                src="assets/img/product5.jpg"
                                alt="product image"
                                className="products__img"
                            />

                            <h2 className="products__title">Blue Sport Pants</h2>
                            <span className="products__price"> $69.99 </span>
                        </article>
                    </div>

                    <div className="swiper-button-next">
                        <i className="ri-arrow-right-line"></i>
                    </div>

                    <div className="swiper-button-prev">
                        <i className="ri-arrow-left-line"></i>
                    </div>
                </div>
            </section>
        </>
    )
}
