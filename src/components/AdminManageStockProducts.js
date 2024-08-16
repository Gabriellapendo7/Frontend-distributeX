import React, { useState, useEffect } from "react";
import axios from "axios";
import './AdminManageStockProducts.css';

const AdminManageStockProducts = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        productName: '',
        description: '',
        price: '',
        itemQuantity: '',
        contactInfo: '',
        manufacturer_id: 1  // Default to 1
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5555/api/products");
            console.log("Fetched products:", response.data);

            if (response.data && Array.isArray(response.data.products)) {
                setProducts(response.data.products);
            } else {
                console.error("Expected an array inside 'products' key but got:", response.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addProduct = async () => {
        if (newProduct.productName && newProduct.price && newProduct.itemQuantity) {
            try {
                const response = await axios.post("http://localhost:5555/api/products", newProduct);
                console.log("Product added:", response.data);
                fetchProducts();
                setNewProduct({
                    productName: '',
                    description: '',
                    price: '',
                    itemQuantity: '',
                    contactInfo: '',
                    manufacturer_id: 1  // Reset to 1 after adding product
                });
            } catch (error) {
                console.error("Error adding product:", error.response?.data || error.message);
            }
        } else {
            console.error("Please fill in all required fields (Product Name, Price, Quantity).");
        }
    };

    const updateProduct = async (productId) => {
        const updatedProduct = products.find(product => product.id === productId);
        if (updatedProduct) {
            const updatedFields = {
                productName: newProduct.productName || updatedProduct.productName,
                description: newProduct.description || updatedProduct.description,
                price: newProduct.price || updatedProduct.price,
                itemQuantity: newProduct.itemQuantity || updatedProduct.itemQuantity,
                contactInfo: newProduct.contactInfo || updatedProduct.contactInfo,
                manufacturer_id: newProduct.manufacturer_id || updatedProduct.manufacturer_id
            };

            try {
                const response = await axios.patch(`http://localhost:5555/api/products/${productId}`, updatedFields);
                console.log("Product updated:", response.data);
                fetchProducts();
                setNewProduct({
                    productName: '',
                    description: '',
                    price: '',
                    itemQuantity: '',
                    contactInfo: '',
                    manufacturer_id: 1  // Reset to 1 after updating product
                });
            } catch (error) {
                console.error("Error updating product:", error.response?.data || error.message);
            }
        } else {
            console.error("Product not found.");
        }
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5555/api/products/${productId}`);
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="manage-stock-products">
            <h1>Manage Stock Products</h1>
            <div className="form-section">
                <h2>Add Product</h2>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.productName}
                    onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={newProduct.itemQuantity}
                    onChange={(e) => setNewProduct({ ...newProduct, itemQuantity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Contact Info"
                    value={newProduct.contactInfo}
                    onChange={(e) => setNewProduct({ ...newProduct, contactInfo: e.target.value })}
                />
                <button onClick={addProduct}>Add Product</button>
            </div>
            <div className="products-list">
                <h2>Products in Stock</h2>
                <ul>
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((product) => (
                            <li key={product.id} className="product-item">
                                <div>
                                    <h3>{product.productName}</h3>
                                    <p>{product.description}</p>
                                    <p>${product.price}</p>
                                    <p>Quantity: {product.itemQuantity}</p>
                                    <p>Contact: {product.contactInfo}</p>
                                    <button onClick={() => updateProduct(product.id)}>Update</button>
                                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default AdminManageStockProducts;
