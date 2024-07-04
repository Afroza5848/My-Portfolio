import aboutImag from '../assets/image/about.png'

const About = () => {
    return (
        <section className="bg-gray-800 dark:text-gray-200">

            <div className="max-w-7xl flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={aboutImag} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div> */}
                <section id='about' className=" py-12">
                    <div className="container mx-auto px-6">
                        <div className='text-center my-7'>
                            <h3 className='text-2xl font-semibold'>Get Know More</h3>
                            <h2 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 inline-block text-transparent bg-clip-text roboto'>About Me</h2>
                            <p>--------------------</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <img
                                    src={aboutImag}
                                    alt="Your Name"
                                    className="w-full rounded-lg shadow-2xl"
                                />
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <p className="text-lg text-gray-100 mb-6">
                                    Hello! I am <span className='font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 inline-block text-transparent bg-clip-text roboto'>Afroza Khatun</span>, a passionate and dedicated <span className='font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 inline-block text-transparent bg-clip-text roboto'>React frontend developer</span> with a knack for creating intuitive and dynamic user interfaces. My journey in web development started with a curiosity for how websites work and has blossomed into a career where I blend creativity and technical expertise to build seamless digital experiences.
                                </p>
                                <p className="text-lg text-gray-100 mb-6">
                                    I specialize in React, leveraging its powerful features to craft scalable and efficient applications. My expertise extends to using Tailwind CSS, which enables me to design beautiful, responsive layouts with minimal fuss. Whether I am turning complex requirements into simple, elegant solutions or optimizing performance for the best user experience, I thrive on the challenges that come with frontend development.
                                </p>
                                <p className="text-lg text-gray-100">
                                    When I am not coding, you can find me <span className='font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 inline-block text-transparent bg-clip-text roboto'>writing Blog</span>. I am always eager to learn new technologies and stay updated with the latest trends in the tech world. Lets create something amazing together!
                                </p>
                                <h2 className='text-2xl mt-4'>Education</h2>
                            <p>Degree (BBA)</p>
                            </div>
                            

                        </div>
                        
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;