import axios from "axios";
import React from "react";
import "./admin.scss";

const Admin = () => {
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData);

        try {
            const res = await axios.post(
                "http://localhost:5000/products",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(res.data);
            toast.success("Successfully added the product!");
        } catch (error) {
            console.error(error);
            toast.error(
                error?.response?.data?.message || "Something went wrong!"
            );
        }
    }

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    required
                ></textarea>

                <div className="file-upload-container">
                    <input type="file" name="image" id="fileUpload" required />
                    <label htmlFor="fileUpload">Upload Product Image</label>
                </div>

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock Quantity"
                    required
                />

                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (out of 5)"
                    min="1"
                    max="5"
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Admin;
