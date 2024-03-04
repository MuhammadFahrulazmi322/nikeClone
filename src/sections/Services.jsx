import { shieldTick, truckFast } from "../assets/icons"

const Services = () => {
    return (
        <section className="max-container">
            <div className="flex flex-row gap-10 max-lg:flex-col justify-center items-center">
                <div className="flex flex-1 flex-col gap-2">
                    <div>
                        <img src={truckFast} className="bg-coral-red p-2 rounded-full" alt=""/>
                    </div>
                    <h3 className="mt-4 font-bold font-palanquin text-2xl">Free Shipping</h3>
                    <p className="mt-4 info-text">
                        Enjoy seamless Shopping with our complimentary shipping
                    </p>
                </div>
                <div className="flex flex-1 flex-col">
                    <div>
                        <img src={shieldTick} className="bg-coral-red p-2 rounded-full" alt=""/>
                    </div>
                    <h3 className="mt-4 font-bold font-palanquin text-2xl">Free Shipping</h3>
                    <p className="mt-4 info-text">
                        Enjoy seamless Shopping with our complimentary shipping
                    </p>
                </div>
                <div className="flex flex-1 flex-col">
                    <div>
                        <img src={truckFast} className="bg-coral-red p-2 rounded-full" alt=""/>
                    </div>
                    <h3 className="mt-4 font-bold font-palanquin text-2xl">Free Shipping</h3>
                    <p className="mt-4 info-text">
                        Enjoy seamless Shopping with our complimentary shipping
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default Services