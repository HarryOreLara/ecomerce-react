import { products } from "../../data/products"
import { ProductCard } from "../components/ProductCard"

export const Products = () => {

    return (

        <>
            <section className="products section" id="products">
                <h2 className="section__title">Best Products</h2>

                <div className="products__container container swiper">
                    <div className="swiper-wrapper">

                        {
                            products.map((product) => (

                                <ProductCard key={product.id} product={product} />
                            ))
                        }

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


