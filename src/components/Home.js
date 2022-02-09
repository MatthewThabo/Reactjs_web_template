import React from "react";
import image from "../testimonials-bg.jpg";



export default function Home() {
    return (
        <main className="bg-gray-300">
            {/* <img src={image} alt="Testimonial" className="absolute object-cover w-full h-full" /> */}
            <section className="relative flex justify-center min-h-screen pt-32 sm:pt-64 md:pt-64 lg:pt-64 px-8">
                <h1 className="text-7xl text-green-100 font-bold cursive leading-none lg:leading-snug">Hello. I'm Thabo</h1>
            </section>
        </main>
    )
}