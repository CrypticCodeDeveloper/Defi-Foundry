const Ecosystem = () => (
    <section className="pt-16 md:pt-24 w-full flex flex-col items-center overflow-hidden">
        <h1 className="mb-8 md:mb-12">The Ecosystem We Serve</h1>
        <p className="text-sm md:text-base text-neutral-400 max-w-xs md:max-w-md lg:max-w-lg mx-auto mb-16 px-4">
            We partner with early-stage crypto teams, DAOs, and founders ready to turn bold ideas into real-world impact.
        </p>

        {/* Responsive Arc Container */}
        <div className="relative w-full flex justify-center">
            <div className="relative w-full max-w-7xl aspect-[2/1] md:aspect-[3/1]">
                {/* Main Arc */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] aspect-[2/1] border-t rounded-t-full border-[#00BC82] shadow-inner shadow-[#00BC82]"></div>

                {/* Background Arcs */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] aspect-[2/1] border-t rounded-t-full border-[#00BC82] shadow-inner shadow-[#00BC82] -z-10"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[90%] aspect-[2/1] border-t rounded-t-full border-[#00BC82]/60 shadow-xl shadow-[#00BC82] -z-20"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[105%] md:w-[95%] aspect-[2/1] border-t rounded-t-full border-[#00BC82]/40 shadow-xl shadow-[#00BC82] -z-30"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] md:w-[100%] aspect-[2/1] border-t rounded-t-full border-[#00BC82]/20 shadow-xl shadow-[#00BC82] -z-40"></div>

                {/* Nodes - Responsive Grid Layout */}
                <div className="absolute w-full h-full">
                    {/* Left Node */}
                    <div className="absolute left-[5%] md:left-[8%] top-[40%] flex flex-col items-center">
                        <div className="ecosystem-node">
                            <img src="/icons/plant-icon.png" alt="plant icon" className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <p className="mt-4 text-xs md:text-sm text-center w-auto max-w-[150px] md:max-w-[180px] font-thin">Early-stage crypto projects</p>
                    </div>

                    {/* Top Node */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center">
                        <div className="ecosystem-node">
                            <img src="/icons/handshake-icon.png" alt="handshake icon" className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <p className="mt-4 text-xs md:text-sm text-center w-auto max-w-[150px] md:max-w-[200px] font-thin">Investors & Partners</p>
                    </div>

                    {/* Right Node */}
                    <div className="absolute right-[5%] md:right-[10%] top-[40%] flex flex-col items-center">
                        <div className="ecosystem-node">
                            <img src="/icons/tools-icon.png" alt="tools icon" className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <p className="mt-4 text-xs md:text-sm text-center w-auto max-w-[150px] md:max-w-[200px] font-thin">Builders & Creatives</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Ecosystem
