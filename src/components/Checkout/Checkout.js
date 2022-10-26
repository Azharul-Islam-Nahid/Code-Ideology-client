import React from 'react';
import { FaCrown, FaDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const course = useLoaderData();

    const { title, img } = course;

    return (

        <div>

            <div className="card mb-10 mx-auto w-5/6 h-max bg-base-300 shadow-xl m-auto">
                <button onClick='' className="btn btn-success w-20 ml-auto mr-5 mt-5"><FaDownload></FaDownload></button>
                <h2 className="card-title m-auto mt-8">{title}</h2>
                <figure className="pt-10">
                    <img src={img} alt="Shoes" className="rounded object-cover h-max w-max" />
                </figure>
                <div className="card-body items-center text-center">
                    <p className='font-bold'>Thank you for joining
                        <br /> Code Ideology! <br />

                        THANK YOU

                        We have added you to our mailing list. You will be among the first people to get all of our special offers, newest updates, and announcements. We will do our best not to bore you with marketing emails!

                        As an added bonus, click on the button below or use code CODE:NOOBCOODER20 to get a 20% discount off your next purchase.

                        [Shop now]

                        You can find our privacy policy here. To unsubscribe from further marketing emails, click here.</p>
                    <button onClick='' className="btn btn-primary mt-2">Get Premium!<FaCrown className='ml-5'></FaCrown></button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;