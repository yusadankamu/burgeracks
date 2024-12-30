import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X, Utensils } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center space-x-2"
                    >
                        <Utensils className="w-8 h-8 text-orange-500" />
                        <span className="font-epilogue text-2xl font-bold text-white">Burgeracks</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                whileHover={{ scale: 1.1 }}
                                className="font-sora text-gray-300 hover:text-white transition-colors"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-500 text-white px-6 py-2 rounded-full font-sora hover:bg-orange-600 transition-colors"
                        >
                            Reserve Now
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-black/95 absolute top-20 left-0 w-full"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block font-sora text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-full font-sora hover:bg-orange-600 transition-colors">
                                Reserve Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
