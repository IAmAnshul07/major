import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { addProduct } from '../../modules/reducer/productReducer';
import { useDispatch } from 'react-redux';

const divStyles = {
    boxShadow: '1px 3px 5px #1C2833',
    margin: '2em',
    padding: '1em',
    background: '#797D7F',

};//#DDCDCA
const divStyles1 = {
    boxShadow: '1px 3px 5px #1C2833',
    margin: '2em',
    padding: '1em',
    background: '#D0D3D4',
    const divStyles = {
        boxShadow: '1px 3px 5px #1C2833',
        margin: '2em',
        padding: '1em',
        background:'#797D7F',
        
        

    };//#DDCDCA
    const divStyles1 = {
        boxShadow: '1px 3px 5px #1C2833',
        margin: '2em',
        padding: '1em',
        background:'#D0D3D4',

};//#F2F3F4

function AddProduct() {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState(
        {
            productName: '',
            productImage: '',
            productDescription: '',
            productPrice: ''
        }
    );

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        if (name === 'productImage') {
            const base64 = await toBase64(e.target.files[0]);
            setProductData((pre) => ({
                ...pre,
                [name]: base64
            }))
        } else {
            setProductData((pre) => ({
                ...pre,
                [name]: value
            }))
        }
    }
    const handleAddNewProduct = () => {
        dispatch(addProduct({ data: productData }));
    }
    return (

        <div style={{color:"#D0D3D4"}}>
        <div style={divStyles} >
            <Container maxWidth="sm" >
                <h1 style={{ color: 'black' }} className="text-3xl font-bold">
                    <center>ADD PRODUCT</center>
                </h1>

                <div style={divStyles1}>
                    <label style={{ color: 'black' }}>Enter product name</label>
                    <TextField name='productName' onChange={handleInputChange} value={productData.productName} variant="filled" size='small' placeholder="NAME" fullWidth>
                    </TextField><br />
                </div>

                <div style={divStyles1}>
                    <label style={{ color: 'black' }}>Enter product image</label>
                    <TextField name='productImage' onChange={handleInputChange} type="file" variant="filled" size='small' placeholder='IMAGE' fullWidth>
                    </TextField>

                </div>
                <div style={divStyles1}>
                    <label style={{ color: 'black' }}>Enter product price</label>
                    <TextField name='productPrice' onChange={handleInputChange} variant="filled" value={productData.productPrice} size='small' placeholder="PRICE" fullWidth>
                    </TextField>
                </div>

                <div>
                </div>
                <div style={divStyles1}>
                    <label style={{ color: 'black' }}>Enter product description</label>
                    <TextField name='productDescription' onChange={handleInputChange} variant="filled" size='small' value={productData.productDescription} placeholder="DESCRIPTION" fullWidth>
                    </TextField>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Button onClick={handleAddNewProduct} className="bg-gradient-to-r from-black to gray-400 hover:from-gray-500 hover:to-black text-white font-semibold px-6 py-3 rounded-md mr-6">
                        <center>add product</center>
                    </Button>
                </div>

            </Container>
        </div>
        </div>
  
  );

}
export default AddProduct;
