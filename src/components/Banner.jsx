import bannerImg from '../assets/banner.png'
import playImg from '../assets/Play.png'
const Banner = () => {
    return(
        <div className="container mx-auto flex justify-between items-center w-[80%] ">
            <div className='space-y-6'>
                <div className="flex items-center mt-10">
                    <div className="flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
    
    
                    <span className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-pink-500 to-purple-500 shadow-sm"></span>
    
                    <span>New: AI-Powered Tools Available</span>
    
                    </div>
                </div>
                
            
                <h2 className='font-extrabold text-[#101727] text-6xl'>Supercharge Your <br />Digital Workflow</h2>
                <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. <br />Explore Products</p>
                <div className='flex items-center gap-4'>
                    <a className="btn rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Explore Products</a>
                    <div className='flex items-center gap-3 btn btn-outline btn-primary rounded-2xl'>
                        <img src={playImg} alt="" />
                        <button >Watch Demo</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    )
}
export default Banner