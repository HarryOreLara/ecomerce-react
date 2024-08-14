
import { Brands } from "./brands/pages/Brands"
import { Collection } from "./collection/pages/Collection"
import { Home } from "./home/pages/Home"
import { Nuevo } from "./new/pages/New"
import { Products } from "./products/pages/Products"
import { Footer } from "./ui/components/Footer"
import { Header } from "./ui/components/Header"
import { Scroll } from "./ui/components/Scroll"

export const EcomerceApp = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Nuevo />
        <Collection />
        <Products />
        <Brands />
      </main>
      <Footer />
      <Scroll />
    </>
  )
}
