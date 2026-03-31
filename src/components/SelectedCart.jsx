import React from "react";
import { toast } from "react-toastify";
import shoppingTool from '../assets/products/shopping-cart.png'

const SelectedCart = ({ selectedCart, setSelectedCart }) => {
    console.log(selectedCart, "selectedCart");

    const handleDeleteSelectedCart = (cart) => {
        const filteredCart = selectedCart.filter(
            (item) => item.id !== cart.id
        );
        toast.success(`${cart.name} removed from cart !`);
        setSelectedCart(filteredCart);
    }

    
    let total = 0;
    selectedCart.forEach(item => {
        total += item.price;
    });
     
    const handleCheckout = () => {
    setSelectedCart([]); 
    toast.success("Checkout successful!");
    }
    return (
        <div className="bg-base-100 shadow-sm container mx-auto w-[80%] p-5 rounded-xl">
            <h2 className="font-semibold text-2xl text-[#101727] mb-2">Your Cart</h2>

            {selectedCart.length === 0 ?
                <div className="flex flex-col justify-center items-center p-20">
                    <img src={shoppingTool} alt="" />
                    <p className="text-[#627382] font-semibold mt-2">Your cart is empty</p>
                </div>
                :
                <>
                    {selectedCart.map((cart) => {
                        return (
                            <div key={cart.id} className="bg-base-100 shadow-sm p-7 mb-3 flex justify-between items-center rounded-lg">
                                <div className="flex justify-center items-center gap-6">
                                    <div>
                                        <img src={cart.icon} alt="" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{cart.name}</p>
                                        <small className="text-[#627382]">${cart.price}</small>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={() => handleDeleteSelectedCart(cart)}
                                        className="btn btn-ghost text-[#FF3980]"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                    
                    <div className="flex justify-between items-center mt-5 px-2">
                        <p className="text-[#627382] font-medium">Total:</p>
                        <h2 className="text-xl font-bold text-[#101727]">${total.toFixed(2)}</h2>
                    </div>

                    
                    <button onClick={handleCheckout} className="w-full mt-5 py-3 rounded-full text-white font-semibold 
                        bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition">
                        Proceed To Checkout
                    </button>
                </>
            }
        </div>
    )
}

export default SelectedCart;