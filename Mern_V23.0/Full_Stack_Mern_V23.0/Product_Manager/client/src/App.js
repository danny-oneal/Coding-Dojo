import CreateProductForm from "./components/CreateProductForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import EditProductForm from "./components/EditProductForm";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="w-1/2 mx-auto flex flex-col place-items-center p-10 gap-10">
            <Routes>
                <Route
                    path="/products"
                    element={
                        <>
                            <CreateProductForm />
                            <ProductList />
                        </>
                    }
                />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products/:id/edit" element={<EditProductForm />} />
            </Routes>
        </div>
    );
}

export default App;
