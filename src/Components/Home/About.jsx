import {  GrDocumentDownload} from "react-icons/gr";
import resume from "../../../src/assets/Saif_Resume.pdf"
const About = () => {
    return (
        <div id="about" className="lg:px-36 lg:pb-6 bg-stone-900">

        <h1 className="text-3xl text-center py-12 text-white font-semibold">About Me</h1>
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 ">

            <img data-aos="fade-left" data-aos-duration="1000" src="https://i.ibb.co/HnKvsRW/296378494-472721248024460-707262741722012543-n.jpg" className="lg:w-[600px]  lg:h-[400px]  rounded-lg shadow-2xl " />
            <div data-aos="fade-right" data-aos-duration="1000">
                <h1 className="text-5xl font-bold text-[#eac882] ">I am available for your Project</h1>
                <p className="py-7  text-lg font-medium text-white">Hello! I'm Saif Uddin Bhuyan. I am from Feni, Bangladesh.
                    I am dedicated to learning and mastering new technologies, and coding has become my true passion.
                    I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I'm all ears! Feel free to explore my resume below to gain a better understanding of my skills and experience. Let's connect and bring your project to life together!</p>
                    {/* {resume} */}
                <a href={resume} download='resume'>
                    <button className='border-2 font-semibold text-black flex gap-4 items-center border-[#eac882] p-3 rounded-lg bg-[#eac882] transition ease-in-out delay-150'>
                        MY RESUME <GrDocumentDownload Download size={23} className='font-bold' />
                    </button>
                </a>
            </div>
        </div>
    </div>
    );
};

export default About;