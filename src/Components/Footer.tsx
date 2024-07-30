import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                    <div className="flex gap-4">
                        <FaInstagram className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                        <FaFacebook className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                        <FaLinkedin className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                    </div>
                </div>
                <div className="flex flex-col items-center md:text-center">
                    <h2 className="text-xl font-bold mb-4">Customer Service</h2>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="#" className="hover:text-gray-300">FAQ</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-gray-300">Shipping</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-gray-300">Returns</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-gray-300">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:text-right">
                    <h2 className="text-xl font-bold mb-4">Subscribe</h2>
                    <p className="mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
                    <form className="flex items-center gap-2">
                        <input type="email" placeholder="Enter your email" className="px-3 py-2 w-full" />
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
