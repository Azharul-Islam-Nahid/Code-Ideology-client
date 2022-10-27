import React from 'react';

const Blog = () => {
    return (
        <section className="container w-9/12 m-auto mt-5 text-center">
            <h1 className='text-2xl font-extrabold'>Some question answer blog about Firebase & Node js</h1>
            <div className="container mt-4 mb-5 text-center">
                <h4 className='text-xl mb-2 font-extrabold'>1.what is cors?</h4>

                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                <h4 className="text-xl mt-5 mb-2 font-extrabold">2.Why are we using firebase? What other options do we have to implement authentication?</h4>


                <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

                    When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.</p>

                <h4 className="text-xl mt-5 mb-2 font-extrabold">3.How does the private route work?</h4>

                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    The protected Route component is used to map all the authenticated routes.
                </p>
                <h4 className="text-xl mt-5 mb-2 font-extrabold">4. What is Node? How does Node work?</h4>

                <p>Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.

                    module is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.
                    require() is a function used to import modules from other files or Node packages.
                    process is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more.Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>


            </div>
        </section>
    );
};

export default Blog;