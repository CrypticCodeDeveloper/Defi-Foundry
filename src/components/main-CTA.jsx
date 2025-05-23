
const mainCTA = () => (
    <div className="h-[100vh] max-md:h-[60vh] max-sm:h-[40vh] max-sm:pb-10 flex-center w-full">
            <div className="relative">
                <img src="/cta-bg.png" alt="" className="" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <h1 className="max-w-lg max-md:text-xl">Ready to scale Web3 with confidence?</h1>
                    <p className="mt-6 text-neutral-400 max-md:text-xs">Start with a clear vision and a team that knows how to execute. We bring structure to the chaos of early-stage building</p>
                    <button className="button text-black mt-6">Start Now</button>
                </div>
            </div>
    </div>
)

export default mainCTA