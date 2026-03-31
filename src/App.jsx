
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Infos from './components/Infos'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'

const fetchInfo = async() => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const infoPromise = fetchInfo();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Infos infoPromise={infoPromise}></Infos>
      </Suspense>

      <ToastContainer />
      
    </>
  )
}

export default App
