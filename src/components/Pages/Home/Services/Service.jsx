import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, title, price, img } = service
    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <figure>
                <img
                    className='rounded-b-2xl'
                    src={img}
                    alt="Picture" />
            </figure>
            <div>
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-semibold'>Price : ${price}</p>
            </div>
            <div className="card-actions justify-end">
                <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
            </div>
        </div>
    );
};
Service.propTypes = {
    service: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,  // Adjust according to your object structure
    }).isRequired,  // If the entire `service` prop is required
};
export default Service;