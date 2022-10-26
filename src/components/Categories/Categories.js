import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className="drawer drawer-mobile ">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content grid lg:grid-cols-3  gap-1 ">
                <label htmlFor="my-drawer-2" className="btn drawer-button w-2/4 mx-auto mt-5 lg:hidden">Open sidebar</label>
                {
                    categories.map(category => <div key={category.id} className="card mb-10 mx-auto w-80 h-max bg-base-300 shadow-xl">
                        <figure className="pt-10">
                            <img src={category.img} alt="Shoes" className="rounded object-cover h-48 w-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{category?.name}</h2>
                            <p>Total course: {category?.total}.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary"> <Link className='px-8 py-4' to={`/category/${category.id}`}>See courses</Link></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80  bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
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