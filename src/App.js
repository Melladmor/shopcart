import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContianer from "./component/CartContianer";
import Modal from "./component/Modal";
import Navbar from "./component/Navbar";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";


function App() {

  const {cartItems ,isLodaing} = useSelector((state)=>state.cart);
  const {isOpen} = useSelector((state)=> state.modal);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems,dispatch])

  useEffect(()=>{
    dispatch(getCartItems())
  },[dispatch])

  if(isLodaing){
    return(
      <div className="loading">
        <h1>Lodaing</h1>
      </div>
    )
  }
    return (
      <main>
      {isOpen && <Modal/>}
        <Navbar/>
        <CartContianer/>
      </main>
    );
  


  
}
export default App;
