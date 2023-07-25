import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from "./components/nav";
import logoB from "./img/QRAI.png";
import blackTh from './img/blackTh.svg';
import face from './img/face.svg';
import inst from './img/inst.svg';
import link from './img/link.svg';
import twit from './img/twit.svg';
import "./styles/main.css";

function App2() {
    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("prompt", "Cyberpunk city in anime style"); // Replace with your prompt value
            formData.append("negative_prompt", "ugly, disfigured, low quality, blurry, nsfw"); // Replace with your negative prompt value
            formData.append("image", mainImage);

            const response = await axios.post("http://localhost:8000/generate_image/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                responseType: "arraybuffer", // Important: Set the response type to arraybuffer
            });

            const imageBlob = new Blob([response.data], { type: "image/jpeg" });
            const imageUrl = URL.createObjectURL(imageBlob);

            // Use imageUrl to display the generated image
            // For example, you can set it to a state variable and display it in an <img> element
            // For demonstration purposes, I'm just logging the imageUrl here:
            console.log(imageUrl);
        } catch (error) {
            console.error("Error uploading image:", error.message);
        }
    };

    const [mainImage, setMainImage] = useState(''); // Replace with the URL of your default image

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setMainImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const graySp = {
        color: '#A8A8A8',
    }

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
                <div style={gradFT} className=''>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-white mt-10 ml-16 text-4xl mb-14'>Input your QR-Image and Prompt</h1>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center w-1/2'>
                            <input type="file" id="fileInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileInputChange} />
                            <label htmlFor="fileInput" style={{ display: 'inline-block', cursor: 'pointer' }}>
                                {mainImage ? (
                                    <div
                                        className="w-128 h-96 border-4 border-dashed border-gray-300 rounded-2% mb-10"
                                        style={{ backgroundImage: `url(${mainImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                                    />
                                ) : (
                                    <div className="w-96 h-96 border-4 border-dashed border-gray-300 rounded-2% mb-10" />
                                )}
                            </label>
                        </div>
                        <div className='w-1/2 flex justify-center items-center'>
                            <input
                                type="text"
                                placeholder="Write your prompt"
                                className="w-96 text-black px-4 py-2 h-16 border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mb-10'>
                        <button className='w-48 h-12 items-center justify-center flex text-xl bg-white text-black rounded-md cursor-pointer'>
                            Upload
                        </button>
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

export default App2;