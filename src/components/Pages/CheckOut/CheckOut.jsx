


const CheckOut = () => {
    // const bookDetails = useLoaderData()
    // const { _id, title, price, img } = bookDetails
    const handleCheckOut = e => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const phone = form.phone.value
        const email = form.email.value
        const message = form.message.value
        const checkOutDetails = {firstName,lastName,phone,email,message}
        console.log(checkOutDetails);
    }
    return (
        <div className="md:mx-40">
            <h3 className="text-3xl font-bold text-center">Check Out</h3>
            <div>
                <form onSubmit={handleCheckOut} className="card-body">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="textarea textarea-bordered textarea-lg max-w-none w-full max-w-xs"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#FF3811]" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;