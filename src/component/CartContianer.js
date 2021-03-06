import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  openModal } from '../features/cart/modalSlice'
import CartItem from './CartItem'

const CartContianer = () => {

    const {cartItems , amount ,total } = useSelector((state)=> state.cart)


    
    const dispatch = useDispatch(); 




    const open = ()=>{
        dispatch(openModal())
    }


    if(amount <1){
        return (
        <section className='cart'>
            <header>
                <h2>Your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
        )
    }
    
    return (
        <section className='cart'>
            <header>
                <h2>Your bag</h2>
            </header>
            <div>
                {cartItems.map((item)=>{
                    return(
                        <CartItem key={item.id} {...item}/>
                    )
                })}
            </div>
            <footer>
                <hr/>
                <div className='cart-total'>
                    <h4>
                    total<span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={open}>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContianer
