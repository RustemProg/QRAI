import { Link } from "react-router-dom";
import Navbar from "./components/nav";
import logoB from "./img/QRAI.png";
import blackTh from './img/blackTh.svg';
import body1 from './img/body1.jpg';
import body2 from './img/body2.jpg';
import face from './img/face.svg';
import inst from './img/inst.svg';
import link from './img/link.svg';
import twit from './img/twit.svg';
import "./styles/main.css";
function App() {
  const graySp = {
    color: '#A8A8A8',
  }

  const gradFoot = {
    background: 'linear-gradient(180deg, #000 84.90%, #2D2D2D 97.40%)',
  };

  const gradFT = {
    color: '#7D7D7D',
  }

  return (
    <div className='h-screen w-screen' style={{ backgroundColor: '#2D2D2D' }}>
      <div className='bg-black'>
        <header className='font-inter'>
          <div style={graySp} className='flex justify-between items-center text-white'>
            <div className='flex justify between items-center'>
              <img src={logoB} className='w-14 h-14 m-4 ' alt="logoB" />
              <h1 className='text-xl overflow-hidden text-white'>QRAI</h1>
            </div>
            <Navbar></Navbar>
            <div className='flex mr-6 items-center'>
              <Link to="/signup"><button className='bg-white text-black rounded-lg h-9 w-32'>Log in</button></Link>
              <button className='ml-7'>
                <img src={blackTh} alt="blackTh" />
              </button>
            </div>
          </div>
        </header >
        <div style={gradFT}>
          <div className='flex items-center justify-between text-white'>
            <div className="relative w-2/5 md:w-2/5 lg:w-4/10">
              <img src={body1} className="w-full" alt='body1' />
              <div className='absolute inset-y-0 right-0 bg-gradient-to-l from-black via-transparent w-1/4'></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent right-0 w-1/4"></div>
            </div>
            <div className='items-center justify-center'>
              <div className='flex flex-col items-start justify-start text-4xl font-prompt'>
                <p>Q uintessential</p>
                <p className='mt-5'>R evolutionary</p>
                <p className='mt-5'>A dvanced</p>
                <p className='mt-5'>I nnovative</p>
              </div>
            </div>
            <div className="relative w-2/5 md:w-2/5 lg:w-4/10">
              <img src={body2} alt='body2' className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent w-1/4"></div>
              <div className='absolute inset-y-0 right-0 bg-gradient-to-l from-black via-transparent w-1/4'></div>
            </div>
          </div>
        </div>
        <div style={gradFoot}>
          <div className='ml-4 mr-4 mt-10 flex justify-between'>
            <div className='font-Podkova text-white'>
              <h2 className='text-4xl'>Experience QR codes like never before!</h2>
              <h3 className='mt-5 text-lg'>The goal of using this AI-powered website for generating QR codes with interesting backgrounds is to enhance user engagement and visual appeal. By leveraging advanced technology, the website aims to create QR codes that not only convey information but also leave a lasting impression on users through visually captivating backgrounds. Incorporating AI-generated backgrounds into QR codes enhances the overall user experience by adding a touch of creativity and modernity. The goal is to make the QR codes visually appealing, sparking curiosity and increasing the likelihood of user interaction, ultimately making the information they represent more memorable and engaging.</h3>
              <div className='flex justify-center mt-20 pb-20'>
                <Link to="/qrai"><button className='w-56 h-12 rounded-lg text-black bg-white font-holtwood'>Check QRAI</button></Link>
              </div>
            </div>
            <div className='ml-40 font-Podkova text-white'>
              <div>
                <h2 className='text-4xl'>NotesGPT - Your Intelligent Audio Summarizer</h2>
                <h3 className='mt-5 text-lg'>Introducing NotesGPT, the cutting-edge project designed to revolutionize the way you interact with podcasts and audio files. Leveraging the power of AI, NotesGPT acts as your attentive listener, capturing and summarizing the most crucial moments in a concise and efficient manner. Say goodbye to lengthy note-taking sessions and hello to a seamless audio summarization experience with NotesGPT. Whether it's podcasts, lectures, or any audio content, this advanced tool ensures you never miss the essential points again. Embrace the future of audio summarization with NotesGPT!</h3>
                <div className='flex justify-center mt-20 pb-20'>
                  <Link to="/notesgpt"><button className='w-56 h-12 rounded-lg text-black bg-white font-holtwood'>Try NotesGPT</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#2D2D2D' }}>
          <div className='pt-10 flex text-center justify-center'>
            <img className='' src={link} alt="link" />
            <img className='ml-3' src={face} alt="face" />
            <img className='ml-3' src={twit} alt="twit" />
            <img className='ml-3' src={inst} alt="inst" />
          </div>
          <div className='mt-5 flex justify-center pb-10'>
            <p style={gradFT}>Thank you for attention</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;