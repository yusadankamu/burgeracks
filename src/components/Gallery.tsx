import { useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const burgerImages = [
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&q=80',
];

const Gallery = () => {
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const gallery = galleryRef.current;
        if (!gallery) return;

        gsap.from(gallery.querySelectorAll('.gallery-item'), {
            opacity: 0.5,
            y: 50,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: gallery,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);

    const breakpointColumns = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (
        <section id="gallery" className="py-20 bg-black" ref={galleryRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    Our Epic Burgers
                </h2>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex -ml-4 w-auto"
                    columnClassName="pl-4 bg-black"
                >
                    {burgerImages.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item mb-4 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={image}
                                alt={`Burger ${index + 1}`}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
        </section>
    );
};

export default Gallery;