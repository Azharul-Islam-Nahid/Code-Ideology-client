import React from 'react';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-6/12' src='https://cdn-icons-png.flaticon.com/512/4762/4762311.png' alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Code Ideology</h1>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.myworldofwork.co.uk/sites/default/files/MA2.png")` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">

                        <button className="btn">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-10 w-9/12'>
                <h1 className='font-extrabold text-2xl mb-10'>  What is Code Ideology?</h1>
                Code Ideology is an inclusive and collaborative process, a mindset, an attitude that brings people together to create positive changes in a place or area.

                It aims to improve not only the physical elements of a space, but also the way people think about and connect with the world around them.

                It is a response to the car-dominated, unattractive and unsafe environments found in many urban areas, but it also has ancient roots reaching back to the way communities and citizens used to be created pre-World War 2.

                Code Ideology is not a "nice to have", it's a "must do"!



                We have collected ﻿and curated the most important Code Ideology concepts, tips and lessons learned into one place to make it easier and faster for you to learn.



                These online courses allow you to learn at your own pace, when you want, where you want!

            </div>
        </div>
    );
};

export default Home;