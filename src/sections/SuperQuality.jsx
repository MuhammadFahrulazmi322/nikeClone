import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <section id="about-us" className="max-container flex max-lg:flex-col justify-between items-center gap-10 w-full">
            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl capitalize font-bold font-palanquin
                lg:max-w-lg">
                    We Provide You 
                    <span className="text-coral-red"> Super Quality </span>Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Our shoes are made with the highest quality materials and manufactured by experienced craftsmen. Every pair of our shoes is carefully inspected to ensure they meet our stringent standards for both
                </p>
                <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfication</p>
                <div className="mt-11">
                    <Button
                        label={"View Details"}
                    />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img 
                    src={shoe8} 
                    alt="shoe 8" width={570} 
                    height={522} 
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default SuperQuality