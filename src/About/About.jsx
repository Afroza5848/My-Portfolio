import aboutImag from '../assets/image/about.png'

const About = () => {
    return (
        <section className=" dark:text-gray-800">
            <div className='text-center my-7'>
                <h3 className='text-2xl font-semibold'>Get Know More</h3>
                <h2 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 inline-block text-transparent bg-clip-text roboto'>About Me</h2>
                <p>--------------------</p>
            </div>
            <div className="max-w-7xl flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={aboutImag} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                {/* <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
                        <span className="dark:text-violet-600">senectus</span>erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default About;