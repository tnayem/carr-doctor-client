import { useLoaderData } from "react-router-dom";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const bookings = useLoaderData()
    console.log(bookings);
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    {/* <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product Name and Image</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {/* row 1 */}
                        {
                           bookings.map(booking=><BookingRow
                           key={booking._id}
                           booking={booking}
                           ></BookingRow>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;