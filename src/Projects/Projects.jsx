import project1 from '../assets/image/project1.png'
import project2 from '../assets/image/project2.png'
import project3 from '../assets/image/poject3.png'

const Projects = () => {
    return (


        <div>

            <div className='text-center'>
                <h2 className="text-5xl mt-8 font-bold text-center bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 inline-block text-transparent bg-clip-text roboto mb-8">My Projects</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto py-20'>
                <div id="project" className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={project1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">ParcelPro</h2>
                            <p className="dark:text-gray-800">ParcelPro is an innovative logistics management platform designed to streamline parcel tracking and delivery processes.</p>
                        </div>

                        <div className='flex justify-center lg:flex-row flex-col gap-4'>

                            {/* modal */}
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}

                            <a href="#_" onClick={() => document.getElementById('my_modal_3').showModal()} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Details</span>
                            </a>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-error btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div>
                                        <h2 className='text-4xl font-extrabold mb-4'>ParcelPro</h2>
                                        <p className='mb-4'>parcelPro is an innovative logistics management platform designed to streamline parcel tracking and delivery processes. Our solution offers real-time tracking, ensuring customers are always informed about their parcels locations.</p>

                                        <h2 className='text-3xl font-extrabold mb-4'>Technology Used</h2>
                                        <ul>
                                            <li>Html5</li>
                                            <li>Css3</li>
                                            <li>Tailwind css</li>
                                            <li>Daisy ui</li>
                                            <li>Firebase</li>
                                            <li>Node Js</li>
                                            <li>Express Js</li>
                                            <li>Javascript</li>
                                            <li>MongoDB</li>
                                            <li>Vercel</li>

                                        </ul>

                                        <h2 className='text-3xl font-extrabold mb-4'>Features</h2>
                                        <ul type="A">
                                            <li>Users can create an account and log in to access the platform.</li>
                                            <li>Users can register and log in using social media accounts.</li>
                                            <li>The platform is fully responsive and works on mobile, tablet, and desktop devices.
                                                Users can book parcels by providing necessary details like receivers address and parcel weight</li>
                                            <li>Users can view, update, and cancel their parcel bookings.</li>
                                            <li>Admins can view statistics with bar charts and line charts showing bookings by date and a comparison between booked and delivered parcels.</li>


                                        </ul>

                                    </div>
                                </div>
                            </dialog>
                            {/* modal */}
                            <a href="https://parcel-pro-e2dbb.web.app/" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Live</span>
                            </a>
                            <a href="https://github.com/Afroza5848/assignment-12-client-side" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Client</span>
                            </a>
                            <a href="https://github.com/Afroza5848/assignment-12-server-side" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Server</span>
                            </a>

                        </div>
                    </div>
                </div>

                <div id="project" className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={project2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">StaySpot</h2>
                            <p className="dark:text-gray-800">Welcome to our StaySpot Hotel. The online program known as the hotel booking system enables users to look for and reserve hotel rooms. </p>
                        </div>

                        <div className='flex justify-center lg:flex-row flex-col gap-4'>

                            {/* modal */}
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}

                            <a href="#_" onClick={() => document.getElementById('my_modal_3').showModal()} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Details</span>
                            </a>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-error btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div>
                                        <h2 className='text-4xl font-extrabold mb-4'>StaySpot</h2>
                                        <p className='mb-4'>Welcome to our StaySpot Hotel. The online program known as the hotel booking system enables users to look for and reserve hotel rooms. Customers benefit from a streamlined reservation experience, and hotel managers get tools to monitor room availability, bookings, and customer data.</p>

                                        <h2 className='text-3xl font-extrabold mb-4'>Technology Used</h2>
                                        <ul>
                                            <li>Html5</li>
                                            <li>Css3</li>
                                            <li>Tailwind css</li>
                                            <li>Daisy ui</li>
                                            <li>Firebase</li>
                                            <li>Node Js</li>
                                            <li>Express Js</li>
                                            <li>Javascript</li>
                                            <li>MongoDB</li>
                                            <li>Vercel</li>

                                        </ul>

                                        <h2 className='text-3xl font-extrabold mb-4'>Features</h2>
                                        <ul type="A">
                                            <li>User-friendly homepage design showcasing hotel rooms with images and videos.</li>
                                            <li>The hotels location is shown on an interactive map for convenient navigation.</li>
                                            <li>Rooms page displaying available hotel room with server-side filtering by price range.
                                            </li>
                                            <li>My Bookings page displaying booked rooms with options to cancel bookings and update dates.</li>
                                            <li>Implementation of JWT authentication for secure access to private routes.</li>


                                        </ul>

                                    </div>
                                </div>
                            </dialog>
                            {/* modal */}
                            <a href="https://stay-spot-7d4c9.web.app/" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Live</span>
                            </a>
                            <a href="https://github.com/Afroza5848/assignment-11-client-side?tab=readme-ov-file" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Client</span>
                            </a>
                            <a href="https://github.com/Afroza5848/assignment-11-server-side" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Server</span>
                            </a>

                        </div>
                    </div>
                </div>


                <div id="project" className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={project3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">DecorArt</h2>
                            <p className="dark:text-gray-800">This is a website for art and craft-related products. Here you will find all the interesting wood and jute products of your choice that we have at your fingertips.</p>
                        </div>

                        <div className='flex justify-center lg:flex-row flex-col gap-4'>

                            {/* modal */}
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}

                            <a href="#_" onClick={() => document.getElementById('my_modal_3').showModal()} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Details</span>
                            </a>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-error btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div>
                                        <h2 className='text-4xl font-extrabold mb-4'>DecorArt</h2>
                                        <p className='mb-4'>This is a website for art and craft-related products. Here you will find all the interesting wood and jute products of your choice that we have at your fingertips.</p>

                                        <h2 className='text-3xl font-extrabold mb-4'>Technology Used</h2>
                                        <ul>
                                            <li>Html5</li>
                                            <li>Css3</li>
                                            <li>Tailwind css</li>
                                            <li>Daisy ui</li>
                                            <li>Firebase</li>
                                            <li>Node Js</li>
                                            <li>Express Js</li>
                                            <li>Javascript</li>
                                            <li>MongoDB</li>
                                            <li>Jwt</li>
                                            <li>Vercel</li>

                                        </ul>

                                        <h2 className='text-3xl font-extrabold mb-4'>Features</h2>
                                        <ul type="A">
                                            <li>Explore a wide range of handcrafted items, from intricately designed jute and wooden jewelry to beautifully Home Decor Wooden Utensils and Kitchenware.</li>
                                            <li>Create an account to save your favorite items, track orders, and receive recommendations based on your preferences.</li>
                                            <li>Easily add items to your cart, securely checkout,Update Your Cart and track the status of your orders every step of the way.
                                            </li>
                                            <li>You can see the products that the ones that need customization and the ones that dont need customization separately through the filter function</li>
                                            <li>Implemented protected routes using React Router to ensure access control. Redirects users to the login page if they attempt to access private routes without authentication.</li>


                                        </ul>

                                    </div>
                                </div>
                            </dialog>
                            {/* modal */}
                            <a href="https://jute-and-timberzone.web.app/" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Live</span>
                            </a>
                            <a href="https://github.com/Afroza5848/assignment-10-client-side" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Client</span>
                            </a>
                            <a href="https://github.com/Afroza5848/assignment-10-server-side" target='_blank' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Server</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;