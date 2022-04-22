
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddProduct } from './components/AddProduct'
import { Navbar } from './components/Navbar'
import { ShowProducts } from './components/ShowProducts'



export default function App () {
  return (
    <React.Fragment>
      {/* <AddProduct/> */}
      <Navbar/>

    <Routes>
      <Route path='/' element={<ShowProducts/>}></Route>
      <Route path='/product' element={<AddProduct/>}></Route>
    </Routes>

    </React.Fragment>
    
  )
}






// import logo from './logo.svg';
// import './App.css';
// import React from "react";

// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
// // import { AddProduct } from './components/AddProduct';


// export default function App() {
//   const [itemCount, setItemCount] = React.useState(1);
  
//   return (

//     <div style={{ display: "block", padding: 30 }}>
//       <div>
//         <Badge color="secondary" badgeContent={itemCount}>
//           <ShoppingCartIcon />{" "}
//         </Badge>
//         <ButtonGroup>
//           <Button
//             onClick={() => {
//               setItemCount(Math.max(itemCount - 1, 0));
//             }}
//           >
//             {" "}
//             <RemoveIcon fontSize="small" />
//           </Button>
//           <Button
//             onClick={() => {
//               setItemCount(itemCount + 1);
//             }}
//           >
//             {" "}
//             <AddIcon fontSize="small" />
//           </Button>
//         </ButtonGroup>
//       </div>
//     </div>
//   );
// }
