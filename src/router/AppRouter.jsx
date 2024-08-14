import { Route, Routes } from 'react-router';
import { Header } from '../ui/components/Header';
import { Footer } from '../ui/components/Footer';
import { Scroll } from '../ui/components/Scroll';
import { MainPage } from '../home/pages/MainPage';
import { NewPage } from '../new/pages/NewPage';
import { CollectionPage } from '../collection/pages/CollectionPage';
import { OneProductPage, ProductsPage } from '../products/pages';
import { BrandsPage } from '../brands/pages/BrandsPage';


export const AppRouter = () => {
    return (
        <>
            <Header />


            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/collection" element={<CollectionPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<OneProductPage />} />
                <Route path="/brands" element={<BrandsPage />} />
                <Route path="/*" element={<MainPage />} />
            </Routes>


            <Footer />
            <Scroll />
        </>
    );
}
