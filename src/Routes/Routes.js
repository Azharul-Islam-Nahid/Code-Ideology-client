import { createBrowserRouter } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Category from "../components/Category/Category";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            }
        ]
    }
]);