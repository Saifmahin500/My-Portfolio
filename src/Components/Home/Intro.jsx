
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
const Intro = () => {
    return (
        <div>
        <div  className="hero min-h-screen">
            <div className="hero-content p-none flex-col lg:flex-row gap-20">
                <img src="https://i.ibb.co/8YXqPYk/IMG-6426-2.jpg" className="lg:w-[650px] h-96  lg:h-[400px] lg:ml-24 rounded-lg shadow-2xl" />
                <div className="text-white">
                    <h1 className="text-4xl font-semibold">Hi!  I'm Saif Uddin Bhuyan</h1>
                    <h1 className="lg:text-3xl text-2xl font-bold flex gap-2">I am a <span className='uppercase text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        <Typewriter

                            options={{
                                strings: ['FRONT-END DEVELOPER_','React Developer_', 'MERN STACK WEB DEVELOPER', ],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </h1>
                    <p className="py-7 pr-36  font-medium text-lg">I have a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love for learning, keen attention to detail, and a strong commitment to my work..</p>
                    <p className='uppercase text-md mt-4'>Connect with me
                        <div className='flex gap-4 py-3 '>
                            <a className='text-3xl bg-purple-700 p-2 rounded-full hover:bg-transparent' href=""> <FaLinkedin></FaLinkedin></a>
                            <a className="text-3xl bg-purple-700 p-2 rounded-full  hover:bg-transparent" href="https://github.com/Saifmahin500"><FaGithub></FaGithub></a>
                            <a className="text-3xl bg-purple-700 p-2 rounded-full  hover:bg-transparent" href="https://www.facebook.com/saif.mahin.395/"><FaFacebook></FaFacebook></a>
                            <a  className="text-3xl bg-purple-700 p-2 rounded-full  hover:bg-transparent" href="https://www.instagram.com/saifmahin_74/"><FaInstagram></FaInstagram></a></div>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Intro;