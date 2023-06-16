import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:3001/api/products/${id}`);
            const { data } = response;
            setProduct(data);
        }
        fetchData();
    }, [id]);

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3001/api/products/${id}`);
        navigate("/products");
    }

    return (
        <div>
            {product ? (
                <>
                    <p>Name: {product.title}</p>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(product._id)}
                    >
                        Delete
                    </Button>
                </>
            ) : null}
        </div>
    );
}

export default ProductDetail;
