import React,{ use , useState} from "react"
import AvailableInfos from '../components/AvailableInfos';
import SelectedCart from '../components/SelectedCart';

const Infos = ({infoPromise}) => {
    console.log(infoPromise);
    const informations = use(infoPromise);
    console.log(informations);
    const [selectedType , setSelectedType] = useState("Products");
    const [selectedCart , setSelectedCart] = useState([])
    return (
        <>
            <div className="flex items-center gap-3 justify-center my-4" >
                
                <button onClick={() => setSelectedType('Products')} className={`btn  ${selectedType === 'Products' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" :  "btn btn-ghost"} rounded-2xl  ` }>Products</button>
                <button onClick={() => setSelectedType('Cart')} className={`btn  ${selectedType === 'Cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" :  "btn btn-ghost"} rounded-2xl  ` }>Cart ({selectedCart.length})</button>
            </div>
            
             {selectedType === "Products"? <AvailableInfos informations={informations} selectedCart={selectedCart} setSelectedCart={setSelectedCart} ></AvailableInfos> :
             <SelectedCart selectedCart={selectedCart} setSelectedCart={setSelectedCart}></SelectedCart>}
        </>
        
    );
}

export default Infos