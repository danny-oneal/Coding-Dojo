import { Paper, FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const styles = {
    paper: {
        width: "20rem",
        padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
};
export default function LoginForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:3001/api/products/${id}`);
            const { data } = response;
            setTitle(data.title);
            setPrice(data.price);
            setDescription(data.description);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    async function submitForm() {
        try {
            console.log("submitted");
            await axios.patch(`http://localhost:3001/api/products/${id}`, { title, price, description });
            setTitle("");
            setPrice("");
            setDescription("");
            navigate("/products");
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            {!loading ? (
                <Paper elevation={3} style={styles.paper}>
                    <h2 className="text-center text-2xl mb-2">Product Manager</h2>
                    <div className="grid grid-flow-row">
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Title</InputLabel>
                            <OutlinedInput
                                label="Title"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Price</InputLabel>
                            <OutlinedInput
                                label="Price"
                                type="text"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Description</InputLabel>
                            <OutlinedInput
                                label="Description"
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" onClick={submitForm}>
                            Update
                        </Button>
                    </div>
                </Paper>
            ) : null}
        </div>
    );
}
