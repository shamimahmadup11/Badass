
import  { useState } from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="bg-gray-800 min-h-screen p-8">
      <div className="mb-8 text-center">
        <img src="https://badass-app.vercel.app/static/media/hero-img-2.aecae7980905c700e4ca.png" alt="" className="mx-auto h-64 w-64 object-cover" />
        <h1 className="text-white text-2xl mt-4">Remove Background Image</h1>
        <h2 className="text-gray-300 text-xl mt-2">Get the transparent background for any image</h2>
        <button
          onClick={() => document.getElementById('imageInput').click()}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-white hover:text-blue-500 border-2 border-transparent hover:border-blue-500 transition duration-300"
        >
          Upload Image
        </button>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <p className="text-gray-300 mt-4">No image? Try one of these:</p>
      </div>

      <div className="mb-8 text-center">
        <img src="https://badass-app.vercel.app/static/media/chain.e33754ea5500ca9abefd.png" alt="" className="mx-auto h-64 w-64 object-cover" />
        <h1 className="text-white text-2xl mt-4">Convert Your Images | Files</h1>
        <h2 className="text-gray-300 text-xl mt-2">With Badass, you can convert your files to any format</h2>
        <button
          onClick={() => document.getElementById('fileInput').click()}
          className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-white hover:text-green-500 border-2 border-transparent hover:border-green-500 transition duration-300"
        >
          Choose File
        </button>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
      </div>

      <div className="mb-8 text-center">
        <img src="https://www.pngitem.com/pimgs/m/35-352217_download-icon-download-icon-hd-png-transparent-png.png" alt="" className="mx-auto h-64 w-64 object-cover" />
        <h1 className="text-white text-2xl mt-4">Download Multiple Images At Once</h1>
        <h2 className="text-gray-300 text-xl mt-2">Ever thought of downloading multiple images at once?</h2>
        
        <Link to="/ImageDownloader"><button
          className="bg-purple-500 text-white py-2 px-4 rounded mt-4 hover:bg-white hover:text-purple-500 border-2 border-transparent hover:border-purple-500 transition duration-300"
        >
          Download Images
        </button></Link>
      </div>

      {selectedImage && (
        <div className="mt-8 text-center">
          <img src={selectedImage} alt="Selected" className="mx-auto h-64 w-64 object-cover" />
        </div>
      )}
    </div>
  );
};

export default HomePage;

