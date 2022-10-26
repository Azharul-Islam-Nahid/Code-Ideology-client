import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Courses from '../Courses/Courses';

const Category = () => {
    const courses = useLoaderData();


    return (
        <div>
            <Categories></Categories>
            {
                courses.map(course => <Courses></Courses>)
            }
        </div>
    );
};

export default Category;