import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Utensils } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Utensils className="w-8 h-8 text-orange-500" />
                            <span className="font-epilogue text-2xl font-bold">Burgeracks</span>
                        </div>
                        <p className="font-sora text-gray-300 mb-6">
                            Where rock n roll meets gourmet burgers in the heart of Denpasar.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-epilogue text-xl font-semibold mb-6">Contact Us</h3>
                        <ul className="font-sora space-y-4">
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-orange-500" />
                                <span>+62 123 456 789</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-orange-500" />
                                <span>info@burgeracks.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-orange-500" />
                                <span>Jl. Sunset Road No. 666, Denpasar, Bali</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="font-epilogue text-xl font-semibold mb-6">Opening Hours</h3>
                        <ul className="font-sora space-y-4">
                            <li>
                                <span className="text-orange-500">Mon - Thu:</span> 11:00 - 22:00
                            </li>
                            <li>
                                <span className="text-orange-500">Fri - Sat:</span> 11:00 - 23:00
                            </li>
                            <li>
                                <span className="text-orange-500">Sunday:</span> 12:00 - 22:00
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-epilogue text-xl font-semibold mb-6">Newsletter</h3>
                        <p className="font-sora text-gray-300 mb-4">
                            Subscribe to get special offers and updates!
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-zinc-800 mt-12 pt-8 text-center font-sora text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Burgeracks. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;