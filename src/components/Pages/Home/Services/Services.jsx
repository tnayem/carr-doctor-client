import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container mx-auto py-10">
            <div className="text-center">
                <h3 className="text-3xl text-orange-600 font-bold">Service</h3>
                <h1 className="text-5xl font-semibold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {
                    services?.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;