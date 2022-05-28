import React from 'react';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div>
            <div class="mockup-window border bg-base-300">
                <div class="flex justify-center px-4 bg-base-200 font-bold">Optimizing performance in a React application</div>
                <p class="justify-center px-4 py-16 bg-base-200">Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques .These include: <br /> <br />
                    <ul class='font-bold'>
                        <li>1. Keeping component state local where necessary</li>
                        <li>2. Memoizing React components to prevent unnecessary re-renders</li>
                        <li>3. Code-splitting in React using dynamic import()</li>
                        <li>4. Windowing or list virtualization in React</li>
                        <li>5. Lazy loading images in React</li>
                    </ul>

                </p>
            </div>

            <div class="mockup-window border bg-base-300 mt-10">
                <div class="flex justify-center px-4 bg-base-200 font-bold">5 Types of Application State in React and How They Help in State Management</div>

                <ul class='font-bold ml-10 bg-base-200'>
                    <li>1 . Communication State</li>
                    <li>2. Data State</li>
                    <li>3. Control State</li>
                    <li>4. Session State</li>
                    <li>5. Location State</li>
                </ul>
            </div>

            <div class="mockup-window border bg-base-300 mt-10">
                <div class="flex justify-center px-4 bg-base-200 font-bold">How does prototypical inheritance work?</div>
                <p class="justify-center px-4 py-16 bg-base-200">Every object with its methods and properties contains an internal and hidden property known as[[Prototype]].The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the[[Prototype]]of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.Nowadays, in modern language, it is being set using __proto__. <br />
                </p>
            </div>
            <div class="mockup-window border bg-base-300 mt-10">
                <div class="flex justify-center px-4 bg-base-200 font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</div>
                <p class="justify-center px-4 py-16 bg-base-200">To find the product of elements of an array. <br /> <br />
                    <ul class='font-bold'>
                        <li>1. Create an empty variable. ( product)</li>
                        <li>2. Initialize it with 1.</li>
                        <li>3. In a loop traverse through each element (or get each element from user) multiply each element to product.</li>
                        <li>4. Print the product.</li>
                    </ul>

                </p>
            </div>
            <div class="mockup-window border bg-base-300 mt-10">
                <div class="flex justify-center px-4 bg-base-200 font-bold">What is a unit test?</div>
                <p class="justify-center px-4 py-16 bg-base-200">This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use.
                    <div class="flex justify-center px-4 bg-base-200 font-bold">Why should write unit tests?</div>
                    <p class="justify-center px-4 py-16 bg-base-200">Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                    <br />

                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;