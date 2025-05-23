import Navbar from "./Navbar.jsx";
import Spotlight from "./spotlight.jsx";


const Hero = () => {
    return (
        <main className="min-h-screen w-full relative flex flex-col items-center justify-center">
            <img src="/hero-bars.png" alt="hero-bars" className="absolute w-full top-0 -z-10"/>
            <Navbar/>
            <div
                className="flex flex-col justify-center items-center relative text-white mt-40"
            >
                <Spotlight className="top-0" />
                {/*Badge*/}
                <div className="w-fit bg-[#00422E] rounded-full border border-white text-xs flex p-2 mb-5">
                    <img src="/star_icon.png" alt="star-icon" className="mr-2"/>
                    <span>Welcome to Defi Foundry</span>
                </div>

                <h1 className="text-4xl md:text-6xl text-center md:leading-16 font-bold">
                    Fueling the next wave of <br/> Web3 innovation</h1>

                <p className="mt-10 text-xs sm:text-sm md:text-sm max-w-sm sm:max-w-lg md:max-w-2xl">Empowering early-stage crypto startups with market-making, fundraising,
                    and branding, backed by a thriving web3 community</p>

                <button className="button mt-8">Apply as a startup</button>

                {/* Eclipse Start */}
                <div className="flex flex-col items-center -mt-46 max-lg:-mt-20 max-md:-mt-4">
                        <img src="/hero-arcs.png" alt="" className=""/>
                </div>
                {/*  Eclipse End  */}

            </div>

            <div className="mt-20">
                <p>Trusted by Leading Web3 Startups and Investors</p>
                <div className="flex items-center gap-12 mt-8 px-8 max-sm:grid max-sm:grid-cols-2 max-sm:gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/startup_logos/acquire.png" alt="" />
                        <p className="max-sm:text-xs">Acquire.fi</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/startup_logos/victus.png" alt="" />
                        <p className="max-sm:text-xs">Victus Capital</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/startup_logos/dext-force.png" alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/startup_logos/connec.png" alt="" />
                        <p className="max-sm:text-xs">Connectico capital</p>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Hero;

