import { Cursor, useTypewriter } from 'react-simple-typewriter';
import bannerImg from '../assets/image/me.jpg'
import { IoDownloadSharp } from "react-icons/io5";

const Banner = () => {
    const [typeEffect] = useTypewriter({
        words: [' React Frontend Developer','Web Developer','UI Developer'],
        loop: {},
        typeSpeed: 300,
        delaySpeed: 50,
    });
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content text-center ">
                <div className="">
                    <h1 className="mb-6 text-5xl">Hello I,am <span className='font-bold roboto'>Afroza <span className='bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 inline-block text-transparent bg-clip-text'>Khatun</span></span></h1>

                    <p className='mb-6 text-2xl text-pink-300 font-semibold'>{typeEffect}  <Cursor cursorColor='cyan' /></p>
                    
                    <div className='space-x-4'>
                        <a href="https://drive.google.com/file/d/1OhN79epCtxO4Z6qbOMzDTD60-uOCMf1z/view?usp=sharing" target='_blank' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-cyan-500 rounded-md shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-xl text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
                                <IoDownloadSharp className='' />
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-cyan-500 transition-all duration-300 transform group-hover:translate-x-full text-xl roboto ease">Resume</span>
                            <span className="relative invisible">Resume</span>
                        </a>


                        <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-cyan-500 rounded-full blur-md"></span>
                                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                            </span>
                            <span className="relative text-white text-xl roboto">Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;