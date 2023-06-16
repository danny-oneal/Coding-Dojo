import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const productReq = await axios.get("http://localhost:3001/api/products");
            setProducts(productReq.data);
        }

        getProducts();
    }, []);
    return (
        <div>
            {products.length > 0 ? (
                <>
                    <h1 className="text-5xl mb-2">All Products</h1>
                    <div className="grid gap-4">
                        {products.map((product) => (
                            <h3 key={product._id} className="text-2xl">
                                <Link to={`/products/${product._id}`}>{product.title}</Link>
                            </h3>
                        ))}
                    </div>
                </>
            ) : (
                <p>No Products</p>
            )}
        </div>
    );
}

export default ProductList;
