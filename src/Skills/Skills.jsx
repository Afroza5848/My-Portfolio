import '@fortawesome/fontawesome-free/css/all.min.css';
import html5 from '../assets/image/html5-original-wordmark.svg'
import css3 from '../assets/image/css3-original-wordmark.svg'
import Tailwind from '../assets/image/tailwindcss-icon.svg'
import bootstrap from '../assets/image/bootstrap.png'
import DaisyUI from '../assets/image/favicon.ico'
import js from '../assets/image/javascript-original.svg'
import react from '../assets/image/react-original-wordmark.svg'
import react_router from '../assets/image/react-router.png'
import next from '../assets/image/nextjs.png'
import Firebase from '../assets/image/firebase-icon.svg'
import node from '../assets/image/nodejs-original-wordmark.svg'
import Express from '../assets/image/express.png'
import MongoDB from '../assets/image/mongodb-original-wordmark.svg'
import git from '../assets/image/git-scm-icon.svg'
import figma from '../assets/image/figma-icon.svg'
import github from '../assets/image/github-logo-DkTr3Tul.png'

const Skills = () => {
    return (
        <section className="bg-cyan-950 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className='text-center'>
                <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 inline-block text-transparent bg-clip-text roboto mb-8">My Skills</h2>
                </div>
                <h2 className='text-cyan-100 text-2xl font-semibold mb-6 '>Frontend Technology:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                    {frontendSkills.map((skill) => (
                        <div key={skill.name} className="flex justify-center gap-3 items-center bg-gradient-to-r from-cyan-800 from-10% via-cyan-200 via-90% to-cyan-600 to-90% ... p-4 rounded-lg shadow-md">
                            <skill.icon className=" w-10 text-blue-500 mb-2" />
                            <h3 className="text-2xl text-white font-semibold roboto">{skill.name}</h3>
                        </div>
                    ))}
                </div>
                <h2 className="text-cyan-100 text-2xl font-semibold mb-6 mt-12">Backend Skills:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {backendSkills.map((skill) => (
                        <div key={skill.name} className="flex justify-center gap-3 items-center bg-gradient-to-r from-cyan-800 from-10% via-cyan-200 via-90% to-cyan-600 to-90% ... p-4 rounded-lg shadow-md">
                            <skill.icon className="w-10 text-blue-500 mb-2" />
                            <h3 className="text-2xl text-white font-semibold roboto">{skill.name}</h3>
                        </div>
                    ))}
                </div>

                <h2 className="text-cyan-100 text-2xl font-semibold mb-6 mt-12">Tools:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tools.map((skill) => (
                        <div key={skill.name} className="flex justify-center gap-3 items-center bg-gradient-to-r from-cyan-800 from-10% via-cyan-200 via-90% to-cyan-600 to-90% ... p-4 rounded-lg shadow-md">
                            <skill.icon className="w-10 text-blue-500 mb-2" />
                            <h3 className="text-2xl text-white font-semibold roboto">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
const frontendSkills = [
    { name: 'HTML', icon: (props) => <img src={html5} {...props} alt="" /> },
    { name: 'CSS', icon: (props) => <img src={css3} {...props} alt="" /> },
    { name: 'Tailwind CSS', icon: (props) => <img src={Tailwind} {...props} alt="" /> },
    { name: 'Bootstrap', icon: (props) => <img src={bootstrap} {...props} alt="" /> },
    { name: 'DaisyUI', icon: (props) => <img src={DaisyUI} {...props} alt="" /> },
    { name: 'JavaScript', icon: (props) => <img src={js} {...props} alt="" /> },
    { name: 'React', icon: (props) => <img src={react} {...props} alt="" /> },
    { name: 'React Router DOM', icon: (props) => <img src={react_router} {...props} alt="" /> },
    { name: 'Next.js', icon: (props) => <img src={next} {...props} alt="" /> },
];

const backendSkills = [
    { name: 'Firebase', icon: (props) => <img src={Firebase} {...props} alt="" /> },
    { name: 'Node.js', icon: (props) => <img src={node} {...props} alt="" /> },
    { name: 'Express.js', icon: (props) => <img src={Express} {...props} alt="" /> },
    { name: 'MongoDB', icon: (props) => <img src={MongoDB} {...props} alt="" /> },
    
];

const tools = [
    { name: 'Git', icon: (props) => <img src={git} {...props} alt="" /> },
    { name: 'Figma', icon: (props) => <img src={figma} {...props} alt="" /> },
    { name: 'GitHub', icon: (props) => <img src={github} {...props} alt="" /> },
]
export default Skills;