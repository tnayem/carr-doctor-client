
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
        }
    }
    // Handle Booking Confirm 
    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/booking/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                //
            }
        })
    }
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;