import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Categories = () => {

    const courses = useLoaderData()


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className="drawer drawer-mobile ">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content grid lg:grid-cols-3  gap-1 ">
                <label htmlFor="my-drawer-2" className="btn drawer-button w-2/4 mx-auto mt-5 mb-5 lg:hidden">Open sidebar</label>
                {

                    courses.map(course =>
                        <div ey={course._id}
                            course={course} className="card mb-10 mx-auto w-80 h-max bg-base-300 shadow-xl">
                            <figure className="pt-10">
                                <img src={course?.img} alt="course" className="rounded object-cover h-60 w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{course?.title}</h2>
                                <p>Course duration: {course?.duration} minutes.</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary"> <Link className='px-8 py-4' to={`/courses/${course?._id}`}>Checkout</Link></button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80  bg-base-300 text-base-content">
                    <li>
                        {
                            categories.map(category => <li key={category.id}>
                                <Link to={`/category/${category.id}`}>{category?.name}</Link>
                            </li>)
                        }
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Categories;