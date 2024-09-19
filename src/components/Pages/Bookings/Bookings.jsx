
import BookingRow from "./BookingRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    // const bookings = useLoaderData()
    // console.log(bookings);
    const [bookings, setBookings] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])
    // Handle Delete 
    const handleDelete = (id) => {
        const procced = confirm('Are you sure you want to delete this')
        if (procced) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        const remainingBooking = bookings.filter(booking=>booking._id != id)
                        setBookings(remainingBooking)
                    }
                })
            console.log(id);
        }
    }
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
                            bookings?.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;