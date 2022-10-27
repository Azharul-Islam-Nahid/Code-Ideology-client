import React, { useEffect, useState } from 'react';
import { FaCrown, FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const Categories = () => {





    const courses = useLoaderData();

    const ref = React.createRef();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className="drawer  drawer-mobile mt-10">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content grid lg:grid-cols-3  gap-1 ">
                <label htmlFor="my-drawer-2" className="btn drawer-button w-2/4 mx-auto mt-5 mb-5 lg:hidden">Open sidebar</label>
                {

                    courses.map(course =>
                        <div ref={ref} key={course._id}
                            course={course} className="card mb-10 mx-auto w-80 h-max bg-base-300 shadow-xl dark:bg-slate-800 dark:text-white">
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <button onClick={toPdf} className="btn btn-success w-15 ml-auto mr-2 mt-5"><FaDownload></FaDownload></button>}
                            </Pdf>
                            <figure className="pt-10">
                                <img src={course?.img} alt="course" className="rounded object-cover h-60 w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{course?.title}</h2>
                                <p>Course duration: {course?.duration} minutes.</p>
                                <p>Course fee: {course?.price} $</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary"> <Link className='px-8 py-4 flex' to={`/courses/${course?._id}`}>Get Premium!<FaCrown className='ml-4'></FaCrown> </Link></button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80  bg-base-300 text-base-content dark:bg-slate-800 dark:text-white">
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