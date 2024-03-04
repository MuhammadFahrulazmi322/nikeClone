import { shieldTick, truckFast } from "../assets/icons"
import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"


const Services = () => {
    return (
        <section className="max-container flex justify-center flex-wrap gap-9">
            <div className="flex flex-row gap-10 max-lg:flex-col justify-center items-center">
                {services.map((service) => (
                    <ServiceCard
                        key={service.label}
                        {...service}
                    />
                ))}

            </div>
        </section>
    )
}

export default Services