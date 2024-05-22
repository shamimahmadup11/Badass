import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-cyan-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-bold">
          <Link to="/"> Badass</Link>
        </div>
        
       
            <ul className="flex space-x-4">
              <Link to="/search">
              <li className="text-black hover:text-white cursor-pointer"> Convert</li>
              </Link>
                <li  className="text-black hover:text-white cursor-pointer">  Download</li>
                <li className="text-black hover:text-white cursor-pointer"> Remove Bag</li>
               
            </ul>
      
      </div>
    </nav>
  );
}

export default Navbar;
