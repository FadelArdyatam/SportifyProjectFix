import './App.css'
import About from './Components/About/About';
import AppBanner from './Components/AppBanner/AppBanner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';

// import HomePage from './Pages/HomePage'
// import FaqPage from './Pages/FaqPage';

import NavBarComponents from './Components/Navbar/NavBarComponents';
import Pricing from './Components/Pricing/Pricing';
import Testimonials from './Components/Testimonials/Testimonials';
import HomePage from './Pages/HomePage';
function App() {

  return (
    <div>

      <div className='overflow-x-hidden bg-white dark:bg-black dark:text-white text-black'>
        <HomePage/>
      </div>

      {/* <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menu" element={<FaqPage />} />
        </Routes> }
      </BrowserRouter> */}


    </div>
  )
}
export default App



// import './App.css'
// import {Routes, Route, BrowserRouter} from "react-router-dom";


// import NavBarComponents from './Components/NavBarComponents';
// import FooterComponents from './Components/FooterComponents';

// import FaqPage from './Pages/FaqPage';
// import HomePage from './Pages/HomePage';




// function App() {
  
//   return (
//   <>
//     <BrowserRouter>
//     <NavBarComponents/>
    
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/Faq" element={<FaqPage />}/>
//       </Routes>
//     <FooterComponents/>
//     <BrowserRouter/>
//   </>
//   );
// }
// export default App
