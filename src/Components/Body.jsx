
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex items-center p-8 bg-gray-700">
      <div className="w-1/2">
        <img 
          src="https://badass-app.vercel.app/static/media/hero-img-1.b04b7105fa7acb3dae33.png" 
          alt="Hero" 
          className="max-w-full"
        />
      </div>
      <div className="w-1/2 pl-8">
        <h1 className="text-3xl font-bold mb-4 text-white">A Free Tool For Image Manipulation</h1>
        <h3 className="text-xl mb-6 text-white">Do all with one application: download, convert, and remove background images.</h3>
        
        <Link to="/Homepage">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 border-2 border-transparent hover:border-blue-500 transition duration-300">
          Get Started
        </button></Link>
      </div>
    </div>
  );
}

export default Body;
