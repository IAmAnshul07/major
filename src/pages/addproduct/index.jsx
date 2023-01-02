import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import React from 'react';
import Container from '@mui/material/Container';





function AddProduct() {

    const divStyles = {
        boxShadow: '1px 2px 5px #1A237E',
        margin: '2em',
        padding: '1em',

    };

    return (


        <div style={divStyles} >
            <Container maxWidth="sm" >

                <h1 style={{ color: '#2ccce4' }} className="text-3xl font-bold">
                    <center>ADD PRODUCT</center>
                </h1>

                <div style={divStyles}>
                    <label style={{ color: '#2ccce4' }}>Enter product name</label>
                    <TextField variant="filled" size='small' placeholder="NAME" fullWidth>
                    </TextField><br />
                </div>

                <div style={divStyles}>
                    <label style={{ color: '#2ccce4' }}>Enter product image</label>
                    <TextField type="file" variant="filled" size='small' placeholder='IMAGE' fullWidth>
                    </TextField>

                </div>
                <div style={divStyles}>
                    <label style={{ color: '#2ccce4' }}>Enter product price</label>
                    <TextField variant="filled" size='small' placeholder="PRICE" fullWidth>
                    </TextField>
                </div>

                <div>
                </div>
                <div style={divStyles}>
                    <label style={{ color: '#2ccce4' }}>Enter product description</label>
                    <TextField variant="filled" size='small' placeholder="DESCRIPTION" fullWidth>
                    </TextField>
                </div>

                <div>
                    <Button class="bg-gradient-to-r from-purple-400 to cyan-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                        add product
                    </Button>
                </div>

            </Container>
        </div>
  
  
  );

}

export default AddProduct;
