import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router"
import { getProductById } from "../helpers/getProductById";
import '../styles/ProductStyle.css';

export const OneProductPage = () => {

    const { id, ...rest } = useParams();

    const navigate = useNavigate();
    const product = useMemo(() => getProductById(id), [id]);

    const { name, description, imageUrl, price } = product;
    const url = `/${imageUrl}`

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!product) {
        return <Navigate to="/" />
    }

    console.log(product.imageUrl)
    return (
        <div className="product-page">
            <div className="product-container">
                <div className="image-container">
                    <img
                        src={url}
                        alt="product image"
                        className="product-image"
                    />
                </div>
                <div className="details-container">
                    <h1 className="product-name">{name}</h1>
                    <p className="product-description">{description}</p>
                    <p className="product-price">$ {price}</p>
                    <button className="buy-button">Comprar Ahora</button>
                    <div className="additional-details">
                        <p>Envío gratis a partir de $50</p>
                        <p>Devoluciones en 30 días</p>
                    </div>
                    <div className="back-alinment">
                        <button
                            onClick={onNavigateBack}
                            className="back-button">Volver</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
