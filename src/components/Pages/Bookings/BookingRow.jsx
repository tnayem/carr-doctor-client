

const BookingRow = ({ booking,handleDelete,handleBookingConfirm}) => {
    const { _id, name, price, service, img } = booking
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handleDelete(_id)}>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className=" h-12 w-12">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{name}</div>
                    </div>
                </div>
            </td>
            <td>${price}</td>
            <td>Purple</td>
            <th>
                <button onClick={()=>handleBookingConfirm(_id)} className="btn bg-[#FF3811] text-white">Confirm</button>
            </th>
        </tr>
    );
};

export default BookingRow;