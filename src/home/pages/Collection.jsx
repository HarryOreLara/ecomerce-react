import { Link } from "react-router-dom";
import { getPaginatedProducts } from "../../products/helpers/getProductById";

export const Collection = () => {

    const product = getPaginatedProducts(2, 0);

    const firstProduct = product[0];
    const secondProduct = product[1];

    return (
        <>
            <section className="collection section" id="collection">
                <div className="collection__container container">


                    <div className="collection__explore">
                        <div className="collection__data-men">
                            <h2 className="collection__title">
                                Men <br />
                                Collection
                            </h2>
                            <Link to="/collection" className="button__link">
                                Explore Clothes <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>

                        <img src="src/assets/img/collection1.jpg" alt="collection image" />
                    </div>

                    <div className="collection__explore">
                        <img src="src/assets/img/collection2.jpg" alt="collection image" />

                        <div className="collection__data-women">
                            <h2 className="collection__title">
                                Women <br />
                                Collection
                            </h2>
                            <Link to="/collection" className="button__link">
                                Explore Clothes <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}
