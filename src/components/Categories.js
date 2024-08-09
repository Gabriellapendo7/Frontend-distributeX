import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/Categories.css';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleAddCategory = async () => {
        try {
            const response = await axios.post('/categories', { name: newCategory });
            setCategories([...categories, response.data]);
            setNewCategory('');
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="New Category"
                />
                <button onClick={handleAddCategory}>Add Category</button>
            </div>
        </div>
    );
}

export default Categories;
