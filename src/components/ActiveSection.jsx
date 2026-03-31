const ActiveSection = () => {
    return (
        <div className="bg-linear-to-r from-purple-600 to-blue-500 py-12 mt-20">
            <div className="max-w-5xl mx-auto flex justify-between items-center text-white text-center">

    
                <div className="flex-1">
                    <h1 className="text-3xl md:text-6xl font-extrabold">50K+</h1>
                    <p className="text-sm mt-2">Active Users</p>
                </div>

    
                <div className="h-16 border-r border-white opacity-40"></div>

    
                <div className="flex-1">
                    <h1 className="text-3xl md:text-6xl font-extrabold">200+</h1>
                    <p className="text-sm mt-2">Premium Tools</p>
                </div>

    
                <div className="h-16 border-r border-white opacity-40"></div>

    
                <div className="flex-1">
                    <h1 className="text-3xl md:text-6xl font-extrabold">4.9</h1>
                    <p className="text-sm mt-2">Rating</p>
                </div>

            </div>
        </div>
    )
}

export default ActiveSection