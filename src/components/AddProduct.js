import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AddProduct = () => {
    const [productName, setproductName] = useState('')
    const [productImage, setproductImage] = useState('')
    const [Description, setDescription] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [unitPrice, setunitPrice] = useState('')

    const productNameHandler = (e) => {
        setproductName(e.target.value)
    }
    const productImageHandler = (e) => {
        setproductImage(e.target.value)
    }
    const DescriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const QuantityHandler = (e) => {
        setQuantity(e.target.value)
    }
    const unitPriceHandler = (e) => {
        setunitPrice(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        var data = {
            productName: productName,
            productImage: productImage,
            Description: Description,
            Quantity: Quantity,
            unitPrice: unitPrice
        }
        axios.post('http://localhost:5000/addproduct', data).then(res => {
            console.log(res.data.data)

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="row m-2 justify-content-center">

        <section>
            
            <form action="/uploadProfilePicture" encType="multipart/form-data" method="POST" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><b>Product Name</b></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name"  onChange={(e)=>{productNameHandler(e)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"><b>Product Image</b></label>
                    <input type="file" name="mypic" className="form-control" id="exampleInputPassword1" placeholder="Upload Image" onChange={(e)=>{productImageHandler(e)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><b>Product Description</b></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name"  onChange={(e)=>{DescriptionHandler(e)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><b>Product Quantity</b></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name"  onChange={(e)=>{QuantityHandler(e)}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><b>Product Unit Price</b></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name"  onChange={(e)=>{unitPriceHandler(e)}}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
        </div>
    )
}
