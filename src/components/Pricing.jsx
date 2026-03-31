const Pricing = () => {
  return (
    <div className="py-16 bg-gray-50">
      
      
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-[#101727]">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#627382] mt-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4  items-stretch">

        
        <div className="bg-white rounded-xl shadow-sm p-8 h-full flex flex-col">
          <h3 className="font-bold text-2xl text-[#101727]">Starter</h3>
          <p className="text-[#627382] text-sm">Perfect for getting started</p>

          <h1 className="text-3xl font-bold mt-4">$0<span className="text-sm font-normal text-[#627382]">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm text-[#627382]">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Access to 10 free tools</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> <span>Basic templates</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> <span>Community support</span> </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> <span>1 project per month</span></li>
                <br />
                <br />
                
          </ul>

          <button className="mt-6 w-full py-2 rounded-full bg-purple-600 text-white">
            Get Started Free
          </button>
        </div>

        
        <div className="relative rounded-xl p-8 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] scale-105 shadow-lg ">
          
          
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-xs px-3 py-1 rounded-full text-[#BB4D00]">
            Most Popular
          </div>

          <h3 className="font-bold text-2xl">Pro</h3>
          <p className="text-sm opacity-80">Best for professionals</p>

          <h1 className="text-3xl font-bold mt-4">$29<span className="text-base font-normal opacity-80">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm">
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Access to all premium tools</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Unlimited templates</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Priority support</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Unlimited projects</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Cloud sync</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Advanced analytics</li>
          </ul>

          <button className="mt-6 w-full py-2 rounded-full bg-white text-purple-600 font-medium">
            Start Pro Trial
          </button>
        </div>

        
        <div className="bg-white rounded-xl shadow-sm p-8 h-full flex flex-col">
          <h3 className="font-bold text-2xl text-[#101727]">Enterprise</h3>
          <p className="text-[#627382] text-sm">For teams and businesses</p>

          <h1 className="text-3xl font-bold mt-4">$99<span className="text-sm font-normal text-[#627382]">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm text-[#627382]">
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Everything in Pro</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Team collaboration</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Custom integrations</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Dedicated support</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> SLA guarantee</li>
            <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>  Custom branding</li>
          </ul>

          <button className="mt-6 w-full py-2 rounded-full bg-purple-600 text-white">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;