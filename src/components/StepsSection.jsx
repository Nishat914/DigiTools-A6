import userIcon from '../assets/user.png'
import rocketIcon from '../assets/rocket.png'
import packageIcon from '../assets/package.png'
const StepsSection = () =>{
    return (
        
    <div className="py-20 bg-gray-50 mt-32">
      
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-[#101727]">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382] mt-4">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

        
        <div className="relative bg-white rounded-xl shadow-sm p-10 text-center">
          
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            01
          </div>

          
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mt-8">
            <img src={userIcon} alt="" className="w-8 h-8 object-contain" />
          </div>

          <h3 className="mt-4 font-bold text-2xl">Create Account</h3>
          <p className="text-[#627382] text-sm mt-2 mb-10">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        
        <div className="relative bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            02
          </div>

          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mt-8">
            <img src={packageIcon} alt=""className="w-8 h-8 object-contain" />
          </div>

          <h3 className="mt-4 font-bold text-2xl">Choose Products</h3>
          <p className="text-[#627382] text-sm mt-2 mb-10">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        
        <div className="relative bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
            03
          </div>

          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mt-8">
            <img src={rocketIcon} alt="" className="w-8 h-8 object-contain" />
          </div>

          <h3 className="mt-4 font-bold text-2xl">Start Creating</h3>
          <p className="text-[#627382] text-sm mt-2 mb-10">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
 
    )
}

export default StepsSection