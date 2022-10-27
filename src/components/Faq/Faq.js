import React from 'react';

const Faq = () => {
    return (
        <div className="m-auto mt-20 h-screen w-9/12 ">
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 dark:bg-slate-800 dark:text-white"
            >
                <div className="collapse-title text-xl font-medium dark:bg-slate-800 dark:text-white">
                    What is Code Ideology's Free Courses initiative all about?
                </div>
                <div className="collapse-content text-justify dark:bg-slate-800 dark:text-white">
                    <p tabIndex={0}>
                        {" "}
                        What the world is experiencing today is a truly unprecedented
                        scenario. We are all plagued with absolute uncertainty. How things
                        pan out, only time will tell, but how we utilize our time right now
                        can make a world of a difference to our future. upGrades Free
                        Courses goal is to help you pick up on some of the hottest skills
                        that are trending in the market today in 6-8hrs, absolutely free of
                        cost.
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 
                dark:bg-slate-800 dark:text-white"
            >
                <div className="collapse-title text-xl font-medium dark:bg-slate-800 dark:text-white">
                    Will I have to pay anything to start learning?
                </div>
                <div className="collapse-content dark:bg-slate-800 dark:text-white">
                    <p tabIndex={0}>
                        {" "}
                        You can choose any number of Programs from any of the 60+ programs
                        and get access to them for no fees whatsoever. You don't have to
                        even provide your credit / debit card details!
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100  dark:bg-slate-800 dark:text-white"
            >
                <div className="collapse-title text-xl font-medium">
                    Who should sign up?
                </div>
                <div className="collapse-content text-justify">
                    <p tabIndex={0}>
                        These programs have been designed to help you develop a brief
                        understanding of the different topics. They meet the needs of
                        working professionals as they are easy to consume and give you the
                        flexibility to finish the program as per your own schedule. So if
                        you have been looking to add a skill or two to your profile,
                        programs offered under upGrad's Life Long Learning initiative will
                        help you do just that by simply investing a few hours every week.
                        Sometimes, these skills may not directly be applicable for you, but
                        learning is said to have an overall positive impact on your mental
                        health. If you are feeling anxious about what lies ahead, enroll in
                        these programs to spend your time more meaningfully. Additionally,
                        learning new skills can also help you create a competitive edge over
                        your peers and help you stay ahead of the curve. For some of the
                        courses, there are certain skill pre-requisites, do review the same
                        before enrolling. Choosing the right course is the first step to
                        success.
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 dark:bg-slate-800 dark:text-white"
            >
                <div className="collapse-title text-xl font-medium">
                    Will I get a certificate?
                </div>
                <div className="collapse-content text-justify">
                    <p tabIndex={0}>
                        {" "}
                        Yes, you will get an e-Certificate of Completion once you
                        successfully finish all the modules within your program. upGrad
                        deploys advanced technology to track learner progress and to be
                        eligible for the certificate you will have to complete all the
                        program modules that appear under the "Course Card". This will be
                        issued once the requisite program duration comes to an end.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;