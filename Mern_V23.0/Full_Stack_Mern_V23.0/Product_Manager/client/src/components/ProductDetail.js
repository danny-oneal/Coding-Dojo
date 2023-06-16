import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:3001/api/products/${id}`);
            const { data } = response;
            setProduct(data);
        }
        fetchData();
    }, [id]);

    return (
        <div>
            {product ? (
                <>
                    <p>Name: {product.title}</p>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </>
            ) : null}
        </div>
    );
}

export default ProductDetail;
