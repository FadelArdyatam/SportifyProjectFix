import "./App.css";
// import HomePage from './Pages/HomePage'
// import FaqPage from './Pages/FaqPage';

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
