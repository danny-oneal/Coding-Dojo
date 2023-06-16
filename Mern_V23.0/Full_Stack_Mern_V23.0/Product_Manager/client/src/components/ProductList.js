import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function ProductList() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    async function getProducts() {
        const productReq = await axios.get("http://localhost:3001/api/products");
        setProducts(productReq.data);
    }
    useEffect(() => {
        getProducts();
    }, []);

    function handleEdit(id) {
        navigate(`/products/${id}/edit`);
    }

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3001/api/products/${id}`);
        getProducts();
    }
    return (
        <div>
            {products.length > 0 ? (
                <>
                    <h1 className="text-5xl mb-2">All Products</h1>
                    <div className="grid gap-4">
                        {products.map((product) => (
                            <h3 key={product._id} className="text-2xl">
                                <Link className="mr-5" to={`/products/${product._id}`}>
                                    {product.title}
                                </Link>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleEdit(product._id)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </Button>
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
