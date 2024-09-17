import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";


const BookService = () => {
    const {user}=useContext(AuthContext)
    const bookDetails = useLoaderData()
    const { _id, title, price, img } = bookDetails
    const handleBookService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = user?.email
        const price = form.amount.value
        const bookingDetails = {
            name,
            date,
            email,
            price,
            service_id:_id,
            service:title,
            img
        }
        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(bookingDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className="md:mx-40">
            <h3 className="text-3xl font-bold text-center">Book Service</h3>
            <div>
                <form onSubmit={handleBookService} className="card-body">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input defaultValue={price} type="number" name="amount" placeholder="Due Amount" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#FF3811]" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;