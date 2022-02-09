import React from "react";
import image from "../testimonial-bg.jpg";
import Thabo from "../Thabo.jpg";

export default function About() {
    return (
        <main className="relative bg-gray-300">
            {/* <img src={image} alt="Testimonial" className="absolute object-cover w-full h-full"/> */}
            <div className="p-10 lg:pt-40 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={Thabo} alt="thabo" className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there, i'am
                            <span className="text-green-100"> Thabo</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <p>Developer Relations at sanity.Also enjoys anime</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
            
    )
}