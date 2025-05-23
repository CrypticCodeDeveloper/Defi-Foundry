import Spotlight from "./spotlight.jsx";
import {testimonials} from "../constants/index.js";

const Testimonials = () => (
    <div className="flex items-center flex-col py-20 w-full">
        <div>
            <h1>Our Testimonials</h1>
            <p className="mt-4 max-w-md text-neutral-400">See how real projects went from idea to momentum with our full-stack execution and guidance</p>
        </div>
        <div className="flex max-xl:grid max-xl:grid-cols-2 max-md:grid-cols-1 gap-7 mt-10">

            {
                testimonials.map((testimonial, index) => (
                    <div key={`${testimonial.name}-${index}`} className="card max-w-[260px] min-w-[290px] border-none rounded-b-none bg-gradient-to-b from-transparent to-[#000B08]">
                        <Spotlight className="-top-56" />
                        <p className="text-left text-sm text-neutral-400">
                            {testimonial.text}
                        </p>
                        <div className="mt-4 flex items-center gap-4">
                            <img src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <h2 className="text-left text-sm font-semibold">{testimonial.name}</h2>
                                <p className="text-left text-xs text-neutral-400">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
)

export default Testimonials