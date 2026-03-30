import icon from '../assets/products/design-tool.png'
import React from 'react'
import Cards from '../components/Cards'
const AvailableInfos = ({informations ,selectedCart ,setSelectedCart}) => {
    console.log(informations,"ble ble");
    return(
        
        <div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 container mx-auto w-[80%] items-stretch'>
            {informations.map(information => {
                console.log(information);
                return  <Cards key={information.id} information={information} setSelectedCart={setSelectedCart} selectedCart={selectedCart}></Cards>
            })}
            
        </div>
        </div>
    )
}
export default AvailableInfos