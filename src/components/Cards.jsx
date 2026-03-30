import React, { useState } from 'react'


const Cards = ({information ,selectedCart ,setSelectedCart}) => {
    const [isSelected , setIsSelected] = useState(false);
    const handleAddCard = () => {
        
    
        setIsSelected(true);
        setSelectedCart([...selectedCart , information ]);
        

    }
    return (
        <div className="card w-full bg-base-100 shadow-sm h-full">
                        <div className="card-body flex flex-col justify-between">
                            <div className='flex justify-end items-center'>
                                
                                <span className={`badge badge-xs 
                                     ${information.tagType === "best seller"
                                     ? "bg-yellow-100 text-yellow-600"
                                    : information.tagType === "popular"
                                    ? "bg-purple-100 text-purple-600"
                                    : information.tagType === "new"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-gray-100 text-gray-600"
                                     }`}>
                                     {information.tagType}
                                </span>
                            </div>
                            
                            <div className="flex flex-col justify-between space-y-3 ">
                                <img src={information.icon} alt="" className='block h-8 w-8' />
                                <h2 className="text-3xl font-bold">{information.name}</h2>
                                <p className='text-[#627382]'>{information.description}</p>
                                <span className="text-xl">${information.price}<small className='text-[#627382]'>/{information.period}</small></span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382]'>{information.features
                                [0]}</span>
                                </li>
                                <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382]'>{information.features
                                [1]}</span>
                                </li>
                                <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382]'>{information.features
                                [2]}</span>
                                </li>
                                
              
                            </ul>
                            <div className="mt-6">
                                <button onClick={handleAddCard} className="btn btn-primary btn-block rounded-2xl">{isSelected === true ? "Added to Cart" : "Buy Now"}</button>
                            </div>
                        </div>
                    </div>
    )
}
export default Cards