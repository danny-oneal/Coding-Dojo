import { Paper, FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
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

    async function submitForm() {
        try {
            console.log("submitted");
            await axios.post(`http://localhost:3001/api/products`, { title, price, description });
            setTitle("");
            setPrice("");
            setDescription("");
        } catch (error) {
            console.error(error);
        }
    }
    return (
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
                    Create
                </Button>
            </div>
        </Paper>
    );
}
