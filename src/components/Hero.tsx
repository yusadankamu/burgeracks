import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80',
        title: 'Rock Your Taste Buds',
    },
    {
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80',
        title: 'Crafted With Passion',
    },
    {
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80',
        title: 'Burger Paradise',
    },
];

const Hero = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const text = textRef.current;

        if (!slider || !text) return;

        const tl = gsap.timeline({ repeat: -1 });

        slides.forEach((_, index) => {
            tl.to(slider.children[index], {
                opacity: 1,
                duration: 1,
                zIndex: 1,
            })
                .to(text.children[index], {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                }, '-=1')
                .to(slider.children[index], {
                    opacity: 0,
                    duration: 1,
                    zIndex: 0,
                    delay: 3,
                })
                .to(text.children[index], {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                }, '-=1');
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            <div ref={sliderRef} className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 opacity-0"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                ))}
            </div>

            <div className="relative h-full flex items-center justify-center">
                <div ref={textRef} className="text-center">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="absolute left-1/2 -translate-x-1/2 opacity-0 translate-y-12"
                        >
                            <h1 className="font-epilogue text-6xl md:text-8xl font-bold text-white mb-6">
                                {slide.title}
                            </h1>
                            <p className="font-sora text-xl text-gray-200 max-w-2xl mx-auto">
                                Where Rock n Roll meets gourmet burgers in the heart of Denpasar
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;