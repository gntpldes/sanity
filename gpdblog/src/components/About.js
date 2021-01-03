import React, { useEffect, useState} from "react"; 
import sanityClient from "../client";
import night from '../components/media/images/night.jpg'
import imageUrlBuilder from "@sanity/image-url"; 
import BlockContent from "@sanity/block-content-to-react"; 

const builder = imageUrlBuilder(sanityClient); 
function urlFor(source){
    return builder.image(source)
}

export default function About(){
    const [author, setAuthor] = useEffect(null); 

    useEffect (() => {
        sanityClient.fetch(`*[_type == "author"]{
            name, 
            bio, 
            "authorImage": image.asset -> url
        }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error); 
    }, []); 
    if (!author) return <div>loading...</div>;
    return(
        <main className="relative">
            <img 
                src={night} 
                alt="night sky"
                className="absolute w-full"
            />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img 
                        src={urlFor(author.authorImage).url()}
                        className="rounded w-32 h-32 lg:w-64 lg:h-64"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-content">
                        <h1 className="cursive text-6xl text-orange-300 mb-4">
                            Hey, I'm{""}
                            <span className="text-blue-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent 
                                blocks={author.bio} 
                                projectId="kweki99f" 
                                dataset="production" 
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}