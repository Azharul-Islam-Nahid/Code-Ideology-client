import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';



const Checkout = () => {

    const toastMessage = () => {
        toast.success('Added to cart successfully');
    }



    const { user } = useContext(AuthContext);

    const course = useLoaderData();

    const { title, img } = course;

    return (

        <div>

            <div className="card mb-10 mx-auto w-5/6 h-max bg-base-300 shadow-xl m-auto">
                <h2 className="card-title m-auto mt-8">{title}</h2>
                <figure className="pt-10">
                    <img src={img} alt="Shoes" className="rounded object-cover h-max w-max" />
                </figure>
                <div className="card-body items-center text-center">
                    <p className='font-bold'>Thank you for joining
                        <br /> Code Ideology! <br />

                        Thank You, {user?.displayName}.<br />

                        We have added your mail: {user?.email}, to our mailing list. You will be among the first people to get all of our special offers, newest updates, and announcements. We will do our best not to bore you with marketing emails!

                        As an added bonus, click on the button below or use code CODE:NOOBCOODER20 to get a 20% discount off your next purchase.

                        [Shop now]

                        You can find our privacy policy here. To unsubscribe from further marketing emails, click here.</p>
                </div>
                <button onClick={toastMessage} className="btn btn-primary">Buy Now!<FaCartPlus className='ml-4'></FaCartPlus></button>
            </div>
        </div>
    );
};

export default Checkout;