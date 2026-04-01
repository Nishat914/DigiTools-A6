
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Infos from './components/Infos'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import ActiveSection from './components/ActiveSection'
import StepsSection  from './components/StepsSection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { useState } from 'react'

const fetchInfo = async() => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const [selectedCart, setSelectedCart] = useState([]);
  const infoPromise = fetchInfo();
  return (
    <>
      <Navbar selectedCart={selectedCart} ></Navbar>
      <Banner></Banner>
      <ActiveSection></ActiveSection>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Infos infoPromise={infoPromise} selectedCart={selectedCart} setSelectedCart={setSelectedCart}></Infos>
      </Suspense>
      <StepsSection></StepsSection>
      <Pricing></Pricing>
      <Footer></Footer>

      <ToastContainer />
      
    </>
  )
}

export default App
