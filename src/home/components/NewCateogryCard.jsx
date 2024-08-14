import { Link } from "react-router-dom"

export const NewCateogryCard = ({
    id,
    name,
    price,
    description,
    imageUrl
}) => {


    return (
        <article className="new__card" >
            <img src={imageUrl} alt="new image" className="new__img" />
            <Link href="#" className="new__link" to={`/product/${id}`} >
                <div className="new__data">
                    <h2 className="new__title">{name}</h2>
                    <span className="new__subtitle"> {description} </span>
                </div>

                <i className="ri-arrow-right-line"></i>
            </Link>
        </article>
    )
}
