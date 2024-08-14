import { useEffect } from "react"
import { Brands } from "./Brands"
import { Collection } from "./Collection"
import { Home } from "./Home"
import { News } from "./News"
import { Products } from "./Products"

export const MainPage = () => {


    return (
        <main className="main">
            <Home />
            <News />
            <Collection />
            <Products   />
            <Brands />
        </main>
    )
}
