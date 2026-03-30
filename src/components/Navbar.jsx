import shoppingTool from '../assets/products/shopping-cart.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            
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
            <div className="navbar-end flext  items-center gap-3">
                 <img src={shoppingTool} alt="" />
                <a>Login</a>
                <a className="btn rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Get Started</a>
            </div>
            <a className="btn rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Get Started</a>
        </div>
    )
}
export default Navbar