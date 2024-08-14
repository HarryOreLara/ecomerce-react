import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => {

    const {id, name, price, imageUrl } = product



    return (
        <>
            <Link 
            to={`/product/${id}`}
            
            className="products__card swiper-slide" style={{cursor: 'pointer'}}>
                <img
                    src={imageUrl}
                    alt="product image"
                    className="products__img"
                />

                <h2 className="products__title">{name}</h2>
                <span className="products__price"> {price}</span>
            </Link>
        </>

    )
}
