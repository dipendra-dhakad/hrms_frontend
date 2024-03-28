import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';
import { Company_Profile } from './pages/Company_Profile';
import Overview from './components/company_profile/Overview';
import { Address } from './components/company_profile/Address';
import router from './routes/routes';
function App() {
  return (
    // <div className='flex flex-col items-center'>
    //   <BrowserRouter>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
          
    //       <Route path="/Company-Profile/overview" element={<Overview/>} />
    //       <Route path="/Company-Profile/address" element={<Address/>} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  <div>
        <RouterProvider router={router} />
  </div>

  );
}

export default App;
