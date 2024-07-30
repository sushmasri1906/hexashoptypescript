import { Link } from 'react-router-dom'; // Import Link for internal navigation
import { FaHome } from 'react-icons/fa'; // Import FaHome icon from react-icons/fa

const MiniNavbar = () => {
  return (
    <div data-aos="zoom-in" className="flex justify-center shadow-2xl p-3">
      <ul className="sm:flex hidden items-center gap-4">
        <li>
          <Link to="/" className="inline-block px-4 hover:text-orange-500 duration-200 items-center gap-1">
            <FaHome className="text-gray-2=800" />
           
          </Link>
        </li>
        <li><Link to="/tr" className="inline-block px-4 hover:text-orange-500 duration-200">Top Rated</Link></li>
        <li><Link to="/kids" className="inline-block px-4 hover:text-orange-500 duration-200">Kids Wear</Link></li>
        <li><Link to="/mens" className="inline-block px-4 hover:text-orange-500 duration-200">Mens Wear</Link></li>
        <li><Link to="/women" className="inline-block px-4 hover:text-orange-500 duration-200">Women's Wear</Link></li>
        <li><Link to="/all" className="inline-block px-4 hover:text-orange-500 duration-200">All Products</Link></li>
      </ul>
    </div>
  );
};

export default MiniNavbar;



