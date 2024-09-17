import { useLoaderData } from "react-router-dom";


const Bookings = () => {
    const data = useLoaderData() 
    console.log(data);
    return (
        <div>
            <h3 className="text-3xl text-center">Bookings :{data.length}</h3>
        </div>
    );
};

export default Bookings;