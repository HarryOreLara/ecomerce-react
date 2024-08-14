import { useEffect } from "react";
import { getPaginatedProducts } from "../../products/helpers/getProductById";
import { NewCateogryCard } from "../components/NewCateogryCard";

export const News = () => {


    const product = getPaginatedProducts(3, 0);
    const { id, name, price, imageUrl } = product;



    return (
        <>
            <section className="new section" id="new">
                <h2 className="section__title">New Categories</h2>

                <div className="new__container container grid">


                {
                    product.map((product) => (
                        <NewCateogryCard key={product.id} {...product} />
                    ))

                }





                </div>


            </section>
        </>
    )
}
