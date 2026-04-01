import shoppingTool from '../assets/products/shopping-cart.png'
const Navbar = ({ selectedCart }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto  mb-6 sticky top-0 z-50">
            
            <div className='navbar-start font-bold text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                DigiTools
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end flex  items-center gap-3">
                 <div className="relative cursor-pointer">
                    <img src={shoppingTool} alt="" className="w-6" />

                        {
                        selectedCart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                                {selectedCart.length}
                            </span>
                        )
                    }
                 </div>
                <a>Login</a>
                <a className="btn rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Get Started</a>
            </div>
            
        </div>
    )
}
export default Navbar