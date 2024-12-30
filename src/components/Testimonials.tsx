import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: 'Sarah Johnson',
        rating: 5,
        text: 'Best burgers in Bali! The rock music atmosphere makes it even better.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    {
        name: 'Mike Chen',
        rating: 5,
        text: 'Amazing place to hang out with friends. The music selection is perfect!',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    },
    {
        name: 'Emma Wilson',
        rating: 5,
        text: 'The combination of great food and rock music is unbeatable.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    },
];

const Testimonials = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        gsap.from(section.querySelectorAll('.testimonial-card'), {
            opacity: 0.5,
            y: 50,
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
        <section id="testimonials" className="py-20 bg-black" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    What Our Rockers Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card bg-zinc-900 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h3 className="font-epilogue text-white font-semibold">
                                        {testimonial.name}
                                    </h3>
                                    <div className="flex">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-yellow-400 fill-current"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="font-sora text-gray-300">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;