import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/cart/modalSlice';

const Modal = () => {

    const dispatch = useDispatch();

    const close =()=>{
        dispatch(closeModal())
    }

    const clearCartItem = ()=>{
        dispatch(clearCart());
        dispatch(closeModal())
    }

    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove all items from shopping cart</h4>
                <div className='btn-container'>
                    <button type='button' className='btn  confirm-btn' onClick={clearCartItem}>
                    Confirm
                    </button>

                    <button type='button' className='btn  clear-btn' onClick={close}>
                    Cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal
