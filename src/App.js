import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Collection from "./pages/collection/Collection";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/category/:categoryId?"
                        element={<Collection />}
                    />
                    <Route
                        path="/products/:productId"
                        element={<ProductDetail />}
                    />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
