
import './App.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Serach from './Components/Serach';
import { createBrowserRouter ,  RouterProvider } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ImageDownloader from './Components/ImageDownloader';

const App = () => {
  const router=createBrowserRouter([
    {
    path: "/",
    element: (
      <>
        <Navbar />
      <Body/>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Navbar />
         <Serach/>
        <Footer />
      </>
    ),
  },
  {
    path: "/Homepage",
    element: (
      <>
        <Navbar />
       <HomePage/>
        <Footer />
      </>
    ),
  },
  {
    path: "/ImageDownloader",
    element: (
      <>
        <Navbar />
      <ImageDownloader/>
        <Footer />
      </>
    ),
  },
]);
  return ( <RouterProvider router={router} />
)};
export default App;
