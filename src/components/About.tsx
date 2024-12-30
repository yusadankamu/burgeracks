import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        gsap.from(section.querySelectorAll('.animate-up'), {
            y: 100,
            opacity: 0.5,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80"
                            alt="Burger"
                            className="animate-up rounded-lg w-full h-64 object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
                            alt="Restaurant interior"
                            className="animate-up rounded-lg w-full h-64 object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80"
                            alt="Rock music"
                            className="animate-up rounded-lg w-full h-64 object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80"
                            alt="People enjoying"
                            className="animate-up rounded-lg w-full h-64 object-cover"
                        />
                    </div>

                    <div className="text-white">
                        <h2 className="animate-up font-epilogue text-4xl md:text-5xl font-bold mb-6">
                            Where Food Meets Rock n Roll
                        </h2>
                        <p className="animate-up font-sora text-gray-300 mb-6">
                            Welcome to Burgeracks, Bali first hamburger cafe that perfectly blends
                            mouthwatering cuisine with rock n roll culture. Since our inception,
                            we've been creating an unforgettable dining experience that celebrates
                            both great food and amazing music.
                        </p>
                        <p className="animate-up font-sora text-gray-300 mb-8">
                            Our venue is not just a restaurant – its a cultural hub where food
                            enthusiasts and music lovers of all ages come together. We have created
                            a unique atmosphere where every bite is accompanied by the perfect
                            soundtrack, making each visit a memorable experience.
                        </p>
                        <button className="animate-up bg-orange-500 text-white px-8 py-3 rounded-full font-sora hover:bg-orange-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;