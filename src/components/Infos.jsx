import React,{ use ,useState } from "react"
import AvailableInfos from '../components/AvailableInfos';
import SelectedCart from '../components/SelectedCart';

const Infos = ({infoPromise , selectedCart, setSelectedCart}) => {
    console.log(infoPromise);
    const informations = use(infoPromise);
    console.log(informations);
    const [selectedType , setSelectedType] = useState("Products");
    
    return (
        <>
            <div className="flex flex-col items-center gap-3 justify-center mt-32 mb-4" >
                <div className="text-center ">
                    <h2 className="font-extrabold text-[#101727] text-5xl mb-4">Premium Digital Tools</h2>
                    <p className="text-[#627382] mb-4">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>
                <div  className="flex items-center gap-4 justify-center my-4">
                    <button onClick={() => setSelectedType('Products')} className={`btn  ${selectedType === 'Products' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" :  "btn btn-ghost"} rounded-2xl  ` }>Products</button>
                <button onClick={() => setSelectedType('Cart')} className={`btn  ${selectedType === 'Cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" :  "btn btn-ghost"} rounded-2xl  ` }>Cart ({selectedCart.length})</button>
                </div>
                
                
            </div>
            
             {selectedType === "Products"? <AvailableInfos informations={informations} selectedCart={selectedCart} setSelectedCart={setSelectedCart} ></AvailableInfos> :
             <SelectedCart selectedCart={selectedCart} setSelectedCart={setSelectedCart}></SelectedCart>}
        </>
        
    );
}

export default Infos