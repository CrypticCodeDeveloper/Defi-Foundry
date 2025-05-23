import Spotlight from "./spotlight.jsx";

const Card = ({title, description, image, className}) => (
    <div key={title} className={`card flex flex-col justify-between relative overflow-hidden ${className}`}>
        <Spotlight size="300px" className="-bottom-12 -right-12" />
        <div className="">
            <h2 className="text-left text-lg lg:text-xl mb-3">{title}</h2>
            <p className="text-left text-neutral-400 max-w-lg text-sm xl:text-lg">{description}</p>
        </div>
        <img src={image} alt="" className="mt-5 mx-auto max-xl:w-[300px]" />
    </div>
)

export default Card