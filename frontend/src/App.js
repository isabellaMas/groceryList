// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import AddGroceryForm from './components/AddGroceryForm';
import GroceryList from './components/GroceryList';
import './App.css';
Modal.setAppElement('#root')

function App() {
    const [groceries, setGroceries] = useState([]);
    const [categories, setCategories] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        async function fetchCategories() {
            const response = await axios.get('http://localhost:8000/api/categories/');
            setCategories(response.data);
        }

        fetchCategories();
    }, []); 

    useEffect(() => {
        async function fetchGroceries() {
            const response = await axios.get('http://localhost:8000/api/groceries/');
            setGroceries(response.data);
        }

        fetchGroceries();
    }, [refresh]); 

    const handleAddGrocery = async (newGrocery) => {
        await axios.post('http://localhost:8000/api/groceries/create/', newGrocery);
        setRefresh(!refresh); 
        setModalIsOpen(false); 
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <h1>Grocery List</h1>
            <button className="addItem" onClick={openModal}>+ add item</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Grocery Item"
                className="modal" 
            >
                <button onClick={closeModal} className="close-button">✘</button>
                <AddGroceryForm onAdd={handleAddGrocery} categories={categories} />
            </Modal>
            <GroceryList groceries={groceries} categories={categories} />
        </div>
    );
}

export default App;