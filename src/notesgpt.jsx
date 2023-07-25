import { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from "./components/nav";
import logoB from "./img/QRAI.png";
import blackTh from './img/blackTh.svg';
import face from './img/face.svg';
import inst from './img/inst.svg';
import link from './img/link.svg';
import twit from './img/twit.svg';
import "./styles/main.css";

function Notesgpt() {
    const [shortRetelling, setShortRetelling] = useState(false);
    const [mainNotes, setMainNotes] = useState(false);

    const handleShortRetellingChange = (event) => {
        setShortRetelling(event.target.checked);
    };

    const handleMainNotesChange = (event) => {
        setMainNotes(event.target.checked);
    };
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        // Do something with the selected audio file, e.g., handle file upload or processing.
        setSelectedFile(file);
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
                            <Link to="/signin"><button className='bg-white text-black rounded-lg h-9 w-32'>Log in</button></Link>
                            <button className='ml-7'>
                                <img src={blackTh} alt="blackTh" />
                            </button>
                        </div>
                    </div>
                </header >
                <div style={gradFT}>
                    <div className="mt-8 flex justify-center">
                        <input
                            type="file"
                            accept="audio/*"
                            className="hidden"
                            onChange={handleFileInputChange}
                            id="audioInput"
                        />
                        <label
                            style={{ backgroundColor: '#7D7D7D' }}
                            htmlFor="audioInput"
                            className="w-48 h-12 px-4 py-2 flex items-center justify-center border rounded-md cursor-pointer text-black">
                            {selectedFile ? selectedFile.name : 'Select Audio'}
                        </label>
                        <button className='ml-16 w-48 h-12 bg-white text-black rounded-md flex justify-center items-center'>Start</button>
                    </div>


                    <div className="flex justify-center mt-5 mb-10">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-6 w-6 text-white"
                                checked={shortRetelling}
                                onChange={handleShortRetellingChange}
                            />
                            <span className="ml-2 text-white">Short-Retelling</span>
                        </label>
                        <label className="ml-24 inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-6 w-6"
                                checked={mainNotes}
                                onChange={handleMainNotesChange}
                            />
                            <span className="ml-2 text-white">Main Notes</span>
                        </label>
                    </div>
                    <div className="mt-4 bg-black border border-white rounded-md border-2px ml-10 mr-10 mb-5">
                        <p className="text-white ml-10 mr-10 pt-4 pb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quo mollitia, quas similique aut odio minus dolores, aspernatur porro reprehenderit ab quasi minima aliquid repellat? Possimus expedita dicta ducimus ex.
                            Veritatis unde totam vero tempora! Molestiae sit commodi saepe quas doloremque, exercitationem enim temporibus porro facilis, qui quos repellat ab. Officia dolores ab aspernatur quidem, repellendus natus excepturi nostrum iure?
                            Veniam aspernatur enim blanditiis accusamus culpa consectetur sed magni exercitationem accusantium tenetur. Nesciunt veritatis repellendus distinctio id, eius, corrupti blanditiis hic maiores inventore esse exercitationem enim tempora voluptatibus laboriosam ut.
                            Doloremque dolore ab iure distinctio, accusamus cupiditate, ipsa voluptatibus nulla aliquid, earum aspernatur nesciunt maiores vel fugit enim? Quod dolorum, deserunt corporis ullam ipsum cumque a fuga vero vitae quis!
                            Velit, inventore atque sapiente iste pariatur, et hic voluptatum facilis adipisci dolore molestias distinctio tempore? Mollitia culpa voluptas harum accusantium blanditiis. Facilis eum vitae labore! Illum incidunt totam beatae aliquid?
                            Inventore, aspernatur! A laboriosam excepturi consequuntur, molestiae rerum nemo quibusdam eveniet vero reprehenderit pariatur maiores, magnam dolore quisquam, laborum sapiente aut. Molestiae excepturi nostrum itaque adipisci ullam, iure unde? Distinctio.
                            Optio, perspiciatis unde facilis ipsa, pariatur accusantium exercitationem eius hic, nam aliquid veritatis recusandae. Esse officia maxime ducimus inventore temporibus, aspernatur a modi. Nobis fugit, harum beatae veniam in accusamus.
                            Nemo placeat ab mollitia maiores quisquam voluptatem praesentium, vitae tempore iste ducimus qui quod, eum corrupti quae dignissimos aliquam modi, in odio tempora minus dolor? Voluptate eum doloribus iusto nobis.
                            Itaque blanditiis quidem, architecto assumenda a esse, odit aliquid laboriosam earum distinctio quae eveniet fuga corporis accusantium voluptas aut vitae nesciunt at excepturi officiis voluptates laborum inventore porro. Ipsum, earum?
                            Illum, illo autem delectus, recusandae iusto enim, nulla tenetur quae repellat impedit ad ut nihil sed repellendus sequi veniam sit beatae atque quam voluptas cumque. Qui laboriosam totam sit iusto.</p>
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

export default Notesgpt;