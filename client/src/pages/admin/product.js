import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const ProductModal = ({ isOpen, onClose, onSave }) => {
    const [productInfo, setProductInfo] = useState({ name: '', size: '', quantity: 0, price: 0 });

    const handleSave = () => {
        // Validate productInfo if needed
        onSave(productInfo);
        setProductInfo({ name: '', size: '', quantity: 0, price: 0 });
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Add Product</DialogTitle>
            <DialogContent>
                <TextField
                    label="Product Name"
                    value={productInfo.name}
                    onChange={(e) => setProductInfo({ ...productInfo, name: e.target.value })}
                    fullWidth
                />
                <TextField
                    label="Size"
                    value={productInfo.size}
                    onChange={(e) => setProductInfo({ ...productInfo, size: e.target.value })}
                    fullWidth
                />
                <TextField
                    type="number"
                    label="Quantity"
                    value={productInfo.quantity}
                    onChange={(e) => setProductInfo({ ...productInfo, quantity: e.target.value })}
                    fullWidth
                />
                <TextField
                    type="number"
                    label="Price"
                    value={productInfo.price}
                    onChange={(e) => setProductInfo({ ...productInfo, price: e.target.value })}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductModal;
