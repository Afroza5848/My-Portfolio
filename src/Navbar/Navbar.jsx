import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="lg:max-w-7xl mx-auto py-5 absolute top-0 left-0 right-0">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn bg-white lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a className="text-xl font-semibold roboto">Home</a></li>
                            <li><a className="text-xl font-semibold roboto">About</a></li>
                            <li><a className="text-xl font-semibold roboto">Skills</a></li>
                            <li><a className="text-xl font-semibold roboto">Projects</a></li>
                            <li><a className="text-xl font-semibold roboto">Contact</a></li>
                           
                        </ul>
                    </div>
                    <a className=" text-4xl text-white font-bold">Afroza<span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 inline-block text-transparent bg-clip-text roboto">Khatun</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-xl font-medium text-white roboto">Home</a></li>
                        <li><a className="text-xl font-medium text-white roboto">About</a></li>
                        <li><a className="text-xl font-medium text-white roboto">Skills</a></li>
                        <li><a className="text-xl font-medium text-white roboto">Projects</a></li>
                        <li><a className="text-xl font-medium text-white roboto">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3 ">
                    <a href="https://www.linkedin.com/in/afroza5848/" className="px-5 py-2 bg-cyan-500 rounded"><FaLinkedinIn></FaLinkedinIn></a>
                    <a href="https://github.com/Afroza5848" className="px-5 py-2 bg-cyan-500 rounded"><FaGithub></FaGithub></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;