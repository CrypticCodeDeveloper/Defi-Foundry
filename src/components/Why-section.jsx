import Spotlight from "./spotlight.jsx";
import {whySectionCards} from "../constants/index.js";

const WhySection = () => (
    <div className="min-h-screen w-full bg-[#000B08] z-40 overflow-hidden relative flex gap-12 max-[1300px]:flex-col items-center justify-between px-20">
        <Spotlight size="500px" className="-left-6 -top-9" />
        <div className="mr-4">
            <h1 className="max-w-[200px] text-left max-md:max-w-full">Why Defi Foundry?</h1>
            <p className="text-left max-w-lg mt-6 text-neutral-200 max-md:text-xs">
                Defi Foundry is a Web3 partner designed for builders. We combine execution, industry insight, and a strong community to help early-stage crypto projects grow from concept to traction. <br /><br />

                Our full-stack approach covers market-making, fundraising, OTC deals, and creative support, empowering teams to move faster and smarter.
            </p>
            <button className="button text-black mt-6">Get started</button>
        </div>
        <div className="grid grid-cols-2 gap-3 max-[772px]:flex max-[772px]:flex-col">
            {
                whySectionCards.map((card) => (
                    <div className="card max-w-[300px] m-4 max-[772px]:max-w-full" key={card.title}>
                        <Spotlight size="300px" className="-bottom-32 -right-32" />
                        <img src={card.icon} alt={card.title} />
                        <h2 className="text-2xl font-semibold mt-3 text-left">{card.title}</h2>
                        <p className="text-left mt-3 text-xs text-neutral-300">
                            {card.text}
                        </p>
                    </div>
                ))
            }
        </div>

    </div>
)

export default WhySection