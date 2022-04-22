import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";

export const Navbar = () => {
  const [itemCount, setItemCount] = React.useState(1);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link btn-outline-success" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn-outline-success" to="/product">Add Product</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <div style={{ display: "block", padding: 15 }}>
              <div>
                <Badge color="secondary" badgeContent={itemCount}>
                  <ShoppingCartIcon />{" "}
                </Badge>
                {/* <ButtonGroup>
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
                </ButtonGroup> */}
              </div>
            </div>
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>
        </div>
      </nav>
    </div>
  )
}
