import { useEffect, useState } from 'react'
import './App.css'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap';
import LOGOPP from './assets/LOGOPP.png';
import GambarRandom from './assets/GambarRandom.jpg';
import PcOren from './assets/PcOren.png';
import LaptopUnguMuda from './assets/LaptopUnguMuda.png';
import LaptopUngu from './assets/LaptopUngu.png';

gsap.registerPlugin(ScrollTrigger);

function App() {



  useEffect(() => {
    gsap.to(".pcOren", {
      y: 200, opacity: 1, scale: 1.1, duration: 1.5, scrollTrigger: {
        trigger: "pcOren",
        markers: false,
        start: "1600px 50%",
        end: "2000 80%",
        scrub: 2,
      }
    })

    gsap.to(".ungumuda", {
      x: 150, opacity: 1, scale: 1.1, duration: 1.5, scrollTrigger: {
        trigger: "ungumuda",
        markers: false,
        start: "1500 50%",
        end: "2000 80%",
        scrub: 2.5,
      }
    })

    gsap.to(".ungutua", {
      x: -150, opacity: 1, scale: 1.1, duration: 1.5, scrollTrigger: {
        trigger: "ungutua",
        markers: false,
        start: "1500 50%",
        end: "2000 80%",
        scrub: 2.5,
      }
    })


  }, [])

  return (
    <>


      <div className='alldivcontainer'>
        <div style={{ marginLeft: "130px", display: 'flex', marginTop: "20px", marginBottom: "20px" }}>
          <img className='logoatas' src={LOGOPP} alt="Logo" />
          <p style={{ color: "black", fontSize: "25px", fontWeight: "bold", marginTop: "18px" }}>Paste 4.0</p>
        </div>
        <div>
          <p className='tryforfree'>Try for free</p>
        </div>

      </div>



      <div style={{ position: "relative", display: "inline-block", }}>

        {/* Gambar background (GambarRandom) */}
        <img className='Gambar' src={GambarRandom} alt="Gambar Random" />

        {/* Gambar overlay (LOGOPP) */}
        <img className='stylePP' src={LOGOPP} alt="Logo" />

      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "200px", fontSize: "40px" }}>
        <h1>New Look. New Feel.</h1>
      </div>

      <div className='all-new-paste' style={{ display: "flex", justifyContent: "center", fontSize: "40px" }}>
        <h1>All-New Paste</h1>
      </div>

      <div className='textawal'>
        <p style={{ display: "flex", justifyContent: "center" }}>Discover unprecedented efficiency with our most advanced, intuitive,</p>
        <p style={{ display: "flex", justifyContent: "center" }}>and user-centric update yet.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>

        <img style={{ opacity: 0, width: "800px", height: "auto", }} className='pcOren' src={PcOren} alt="..." />

      </div>

      <div style={{ display: "flex", marginBottom: "150px" }}>
        <div style={{ marginTop: "-100px" }}>

          <img style={{ marginTop: "-10px", marginLeft: "-50px", opacity: 0 }} className='ungumuda' src={LaptopUnguMuda} alt="..." />

        </div>

        <div style={{ marginTop: "-133px" }}>

          <img style={{ marginTop: "-1px", width: "500px", height: "350px", marginLeft: "600px", opacity: 0 }} className='ungutua' src={LaptopUngu} alt="..." />
        </div>

      </div>

      <div style={{backgroundColor:"lightgrey",}}>

        <div  style={{display:"flex",justifyContent:"center",fontSize:"40px",marginTop:"200px"}}>
          <h1 style={{marginTop:"200px"}}>Resizable Window</h1>
        </div>
        <div  style={{display:"flex",justifyContent:"center",fontSize:"45px"}}>
          <h1 style={{color:"lightorange"}}>Your Space, Your Rules</h1>
        </div>

      </div>



    </>
  );
}

export default App;
