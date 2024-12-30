import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const partners = [
    { name: 'TripAdvisor', logo: 'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg' },
    { name: 'Booking.com', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCV5SMvcjMFQ0gxbxXCSF8xnNWfOxbnFBj_OKqz8noVDMvhrMg7lXoc7oHMPGqY_RWcCo&usqp=CAU' },
    { name: 'Agoda', logo: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&q=80' },
    { name: 'Traveloka', logo: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&q=80' },
];

const Partners = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const container = containerRef.current;
        if (!marquee || !container) return;

        gsap.to(marquee, {
            x: '-50%',
            duration: 20,
            ease: 'none',
            repeat: -1,
        });

        gsap.from(container.querySelectorAll('.partners-logo'), {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: container,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);

    return (
        <section className="py-20 bg-zinc-900" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    Our Partners
                </h2>
                <div className="overflow-hidden">
                    <div ref={marqueeRef} className="flex space-x-12 whitespace-nowrap">
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="partner-logo inline-flex items-center justify-center bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors"
                            >
                                <span className="font-sora text-white text-xl">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;