import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const bookDetails = useLoaderData()
    return (
        <div>
            <p>Book Service: ${bookDetails.title}</p>
        </div>
    );
};

export default CheckOut;