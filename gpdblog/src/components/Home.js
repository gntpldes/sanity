import React from "react"; 
import image from '../components/media/images/chicago.jpg'

export default function Home(){
    return (
        <main>
            <img 
                src={image} 
                alt="Chicago" 
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-xl  font-bold cursive leading-none lg:leading-snug home-name txt_color">
                    David Welsh's Blog
                </h1>
            </section>
        </main>
    )
}