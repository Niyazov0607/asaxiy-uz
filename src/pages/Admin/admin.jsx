import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import "./admin.scss";

const Admin = () => {
    const { token } = useContext(ThemeContext);
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
                        Authorization: "Bareer" + token,
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
            <h1 className="admin-title">Admin Panel</h1>

            <form className="admin-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="admin-input"
                    placeholder="Product Name"
                    required
                />

                <input
                    type="text"
                    name="category"
                    className="admin-input"
                    placeholder="Category"
                    required
                />

                <input
                    type="number"
                    name="price"
                    className="admin-input"
                    placeholder="Price"
                    required
                />

                <textarea
                    name="description"
                    className="admin-textarea"
                    placeholder="Description"
                    required
                ></textarea>

                <div className="file-upload-container">
                    <input
                        type="file"
                        name="image"
                        id="fileUpload"
                        className="admin-file-input"
                        required
                    />
                    <label htmlFor="fileUpload" className="admin-file-label">
                        Upload Product Image
                    </label>
                </div>

                <input
                    type="number"
                    name="stock"
                    className="admin-input"
                    placeholder="Stock Quantity"
                    required
                />

                <input
                    type="number"
                    name="rating"
                    className="admin-input"
                    placeholder="Rating (out of 5)"
                    min="1"
                    max="5"
                    required
                />

                <button type="submit" className="admin-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Admin;
