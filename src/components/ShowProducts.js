import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";


export const ShowProducts = () => {
    const [products, setproducts] = useState([])
    const [itemCount, setItemCount] = React.useState(1);

    const getProducts = () => {
        axios.get('http://localhost:5000/addproduct').then(res => {
            console.log(res.data.data)
            setproducts(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getProducts();
    }, [])

    const addProductToCart = (e) => {
        console.log(e)
    }
    return (
        <div className="row m-2">
            {products.map((product => {
                return (

                    <div className="col-sm-3 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={product.productImage} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">{product.Description}</p>
                                <p className="card-text">{product.Quantity}</p>
                                <h3 className="card-title">{product.unitPrice}</h3>
                                <div style={{ display: "block", padding: 30 }}>
                                    <div>
                                        <Badge color="secondary" badgeContent={itemCount}>
                                            <ShoppingCartIcon />{" "}
                                        </Badge>
                                        <ButtonGroup>
                                            <Button
                                                onClick={() => {
                                                    setItemCount(Math.max(itemCount - 1, 0));
                                                }}
                                            >
                                                {" "}
                                                <RemoveIcon fontSize="small" />
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setItemCount(itemCount + 1);
                                                }}
                                            >
                                                {" "}
                                                <AddIcon fontSize="small" />
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='btn btn-primary' onClick={
                                        addProductToCart({ product })
                                    }>Add To Cart</button> </div>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>

                    </div>
                )
            }
            )
            )

            }
        </div>



    )
}
