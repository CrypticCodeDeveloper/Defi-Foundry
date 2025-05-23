import {servicesInfo} from "../constants/index.js";
import Card from "./card.jsx";

const Services = () => (
    <div className="flex-center flex-col mt-28 w-full px-4">
        <h1>Learn Our Services</h1>
        <p className="mt-4 text-neutral-400">Discover how we help Web3 projects grow from launch to traction</p>
        <div className="grid grid-cols-5 max-lg:grid-cols-2 gap-3 gap-y-8 mt-4 p-24 px-36 max-md:flex max-md:flex-col">
            {servicesInfo.map((service, index) => (
                <Card
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    className={`${index === 0 || index === 3 ? "lg:col-span-3" : "lg:col-span-2"}`}
                    key={service.title}
                />
            ))}
        </div>
    </div>
)

export default Services