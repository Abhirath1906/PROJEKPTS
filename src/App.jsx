import { useEffect, useState } from 'react'
import './App.css'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap';
import LOGOPP from './assets/LOGOPP.png';
import GambarRandom from './assets/GambarRandom.jpg';
import PcOren from './assets/PcOren.png';
import LaptopUnguMuda from './assets/LaptopUnguMuda.png';
import LaptopUngu from './assets/LaptopUngu.png';
import LaptopOren from './assets/LaptopOren.jpg';
import gambarAngkasa from './assets/gambarAngkasa.jpg';
import GambarBumi from './assets/GambarBumi.png';
import GambarChat from './assets/GambarChat.jpg';
import GambarTeleskop from './assets/GambarTeleskop.png';
import GambarTextNasa from './assets/GambarTextNasa.png';
import Pemandangan from './assets/Pemandangan.jpg';
import PemandanganBerlapis from './assets/PemandanganBerlapis.jpg';
import GambarP from './assets/GambarP.png';
import LogoTwitter from './assets/LogoTwitter.png';
import LogoFacebook from './assets/LogoFacebook.png';


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

    gsap.to(".alldivcontainer", {
      y: 50, opacity: 1, duration: 1, scrollTrigger: {
        trigger: "alldivcontainer",
        markers: false,
        start: "700px 50%",
        end: "900px 80%",
        scrub: 2

      }
    })

    gsap.to(".containerlaptopOren", {
      y: 100, opacity: 1, scale: 1.1, duration: 1, scrollTrigger: {
        trigger: "containerlaptopOren",
        markers: false,
        start: "3000px 50%",
        end: "4000px 80%",
        scrub: 2

      }
    })

    gsap.to(".container2gambar", {
      y: -100, opacity: 1, scale: 1.1, duration: 1, scrollTrigger: {
        trigger: "container2gambar",
        markers: false,
        start: "3500px 50%",
        end: "bottom 80%",
        scrub: 2

      }
    })

    gsap.to(".TextNasa", {
      y: -50, opacity: 1, scale: 1, duration: 1.5, scrollTrigger: {
        trigger: "TextNasa",
        markers: false,
        start: "4000px 50%",
        end: "4500 80%",
        scrub: 3

      }
    })

    gsap.to(".BUMI", {
      y: -80, opacity: 1, scale: 1, duration: 1.5, scrollTrigger: {
        trigger: "BUMI",
        markers: false,
        start: "4000px 50%",
        end: "4500 80%",
        scrub: 3

      }
    })

    gsap.to(".TEXT", {
      y: -80, opacity: 1, scale: 1, duration: 1.5, scrollTrigger: {
        trigger: "TEXT",
        markers: false,
        start: "4000px 50%",
        end: "4500 80%",
        scrub: 3

      }
    })

    gsap.to(".CHAT", {
      y: -100, opacity: 1, scale: 1, duration: 1.5, scrollTrigger: {
        trigger: "CHAT",
        markers: false,
        start: "4000px 50%",
        end: "4500 80%",
        scrub: 3

      }
    })

    gsap.to(".containerLastText", {
      y: -100, opacity: 1, scale: 1, duration: 1.5, scrollTrigger: {
        trigger: "containerLasText",
        markers: false,
        start: "3100px 50%",
        end: "4500 80%",
        scrub: 3

      }
    })
    // gsap.to(".CHAT", {
    //   y: -100, opacity: 1, scale: 1, duration: 1.5, scrollTrigger: {
    //     trigger: "CHAT",
    //     markers: false,
    //     start: "3800px 50%",
    //     end: "bottom 80%",
    //     scrub: 3

    //   }
    // })

    gsap.to(".containerAllText", {
      y: -400, opacity: 1, scale: 1, duration: 0.5, scrollTrigger: {
        trigger: "containerAllText",
        markers: false,
        start: "5350px 50%",
        end: "bottom 80%",
        scrub: 1

      }
    })
    gsap.to(".containerPemandangan", {
      y: 0, opacity: 1, scale: 0.6, duration: 0.5, scrollTrigger: {
        trigger: "containerPemandangan",
        markers: false,
        start: "5350px 50%",
        end: "7000 80%",
        scrub: 1

      }
    })

    gsap.to(".lastpart", {
      y: -30, opacity: 1, scale: 1, duration: 1, scrollTrigger: {
        trigger: "lastpart",
        markers: false,
        start: "6500px 50%",
        end: "7700 80%",
        scrub: 1

      }
    })







  }, [])

  return (
    <>

      <div style={{ fontFamily: 'Roboto, sans-serif' }} className='all-body' >

        {/* <div className='alldivcontainer'>

          <div style={{ marginLeft: "130px", display: 'flex', marginTop: "20px", marginBottom: "20px" }}>
            <img className='logoatas' src={LOGOPP} alt="Logo" />
            <p style={{ color: "black", fontSize: "25px", fontWeight: "bold", marginTop: "15px" }}>Paste 4.0</p>
          </div>
          <div>
            <p className='tryforfree'>Try for free</p>
          </div>

        </div> */}



        <div style={{ position: "relative", display: "inline-block", }}>

          {/* Gambar background (GambarRandom) */}
          <img className='Gambar' src={GambarRandom} alt="Gambar Random" />

          {/* Gambar overlay (LOGOPP) */}
          <img className='stylePP' src={LOGOPP} alt="Logo" />

        </div>



        <div className='alldivcontainer'>

          <div style={{ marginLeft: "130px", display: 'flex', marginTop: "20px", marginBottom: "20px" }}>
            <img className='logoatas' src={LOGOPP} alt="Logo" />
            <p style={{ color: "black", fontSize: "25px", fontWeight: "bold", marginTop: "15px" }}>Paste 4.0</p>
          </div>
          <div>
            <p className='tryforfree'>Try for free</p>
          </div>

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

        <div className='divtext'>

          <div style={{ display: "flex", justifyContent: "center", fontSize: "35px", marginTop: "200px" }}>
            <h1 style={{ marginTop: "200px" }}>Resizable Window</h1>
          </div>

          <div style={{ display: "flex", justifyContent: "center", fontSize: "35px" }}>
            <h1 className='yourSpace'>Your Space, Your Rules</h1>
          </div>

          <div style={{ marginTop: "20px", marginBottom: "150px" }}>
            <p style={{ fontSize: "30px", display: "flex", justifyContent: "center" }}>Whether you want more items or need larger previews, Paste adapts </p>
            <p style={{ fontSize: "30px", display: "flex", justifyContent: "center" }}>to your needs. It’s not just about flexibility, it’s about crafting </p>
            <p style={{ fontSize: "30px", display: "flex", justifyContent: "center" }}>a workspace that elevates productivity.</p>
          </div>


          {/* masukin text ke gambar */}
          <div className='containerlaptopOren' style={{
            display: "flex", justifyContent: "center", marginBottom: "50px",
            position: "relative", opacity: 0
          }}>
            <img className='laptopOren' src={LaptopOren} alt="..." />
            <p className='theText'>The compact size maximizes display without sacrificing content</p>
          </div>


          <div style={{ position: "relative", display: "flex", marginTop: "150px", opacity: 0 }} className='container2gambar'>
            <img className='Angkasa' src={gambarAngkasa} alt="..." />
            <img className='TextNasa' src={GambarTextNasa} alt="..." />
            <img className='BUMI' src={GambarBumi} alt="..." />
            <img className='BUMI' src={GambarTeleskop} alt="..." />
            <div className='TEXT'>
              <p >The content dynamically adapts to address</p>
              <p>your unique requirements.</p>
            </div>

            {/* IMG KE 2 */}

            <div className='containerIMG2'>
              <div >

                <div className='TEXT2' >
                  <h1 >Feedback to Action</h1>
                  <p >In our pursuit of creating an experience centered around you,
                    we introduce the most requested feature, turning your valuable feedback into reality.</p>
                </div>
              </div>
              <img className='CHAT' src={GambarChat} alt="..." />

              <div className='containerLastText'>
                <p className='lastText'>Help make Paste even better</p>
              </div>
            </div>

          </div>

        </div>

        <div className='allContainer2'>




          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>

            <img className='PEMANDANGAN' src={PemandanganBerlapis} alt='...' />

          </div>
          <div className='containerAllText' style={{}}>
            <p className='Textcon1'>Compact Mode</p>
            <p className='Textcon2'>Maximize Visibility,</p>
            <p className='Textcon3'>Minimize Clutter</p>
            <div className='twotext'>
              <p>When space is at a premium, Paste goes the extra mile adapting its layout </p>
              <p style={{ marginLeft: "120px" }}>to fit even more content within a compact space.</p>
            </div>
          </div>

          <div className='Pemandangan2'>

          </div>

          <div className='containerPemandangan'>
            <img className='Pemandangan2' src={Pemandangan} />
          </div>

          {/* <div className='containerTEXTdown'>
            <p style={{color:"white"}}>Just shrink your window and watch Paste compact smoothly, giving
               you a bird’s-eye view of your content.</p>
          </div> */}

        </div>


        <div className='lastpart' style={{ backgroundColor: "black", marginTop: "200px",opacity:0,}}>


          <div style={{opacity:0}} className='lastpart'>


            <div className='divTop'>
              <div style={{ marginTop: "65px", marginRight: "70px" }}>
                <img src={GambarP} alt='..' />
              </div>
              <div style={{ display: "flex", gap: "250px", marginTop: "70px" }}>


                <div >
                  <p style={{ marginBottom: "30px", fontWeight: "bold" }}>Paste</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Try for free </p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Get on Setapp</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Use cases</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Updates</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Pricing</p>
                </div>




                <div>
                  <p style={{ marginBottom: "30px", fontWeight: "bold" }}>Resources</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Help & support </p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Blog</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Terms of use</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Privacy policy</p>
                </div>

                <div >
                  <p style={{ marginBottom: "30px", fontWeight: "bold" }}>More</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>About</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Contact</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Beta program</p>

                  <p style={{ marginBottom: "20px", color: "grey", cursor: "pointer" }}>Suggest a feature</p>

                </div>

              </div>



            </div>


            <div className='lastpart' style={{display:"flex",justifyContent:'center',gap:"500px",marginTop:"100px",opacity:0}}>
              <p style={{color: "grey",marginBottom:"35px"}}>© 2025 Paste Team ApS. All rights reserved.</p>
              <p style={{color:"grey",marginBottom:"35px"}}>All trademarks are the property of their respective owners.</p>
            </div>


          </div>



        </div>

      </div>
    </>
  );
}

export default App;
