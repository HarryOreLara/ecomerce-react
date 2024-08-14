import { Route, Router } from 'react-router';
import { Header } from '../ui/components/Header';
import { Products } from '../products/pages/Products';

export const AppRouter = () => {
    return (
        <>
            <Header />
            <Router>
                {/* Routes go here */}
                <Route path="product/:id" element={<Products />} />|
            </Router>
        </>
    );
}
