import { AiOutlineArrowRight } from 'react-icons/ai';

const Project1 = () => {
    return (
        <div>
        <div className="card card-compact w-96  bg-transparent shadow-2xl text-white">
            <figure><img className='hover:scale-125 ease-in duration-500' src="https://i.ibb.co/vhd2tPC/Shared-Screenshot.jpg" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold uppercase">Hungry Ducks</h2>
                <p> Hungry Ducks is a full-stack web application with authentication.</p>

                {/* link here */}
               


                <div className="card-actions justify-between text-black font-bold mt-7">
                <div className='card-actions'>
                    <a className='border p-2 bg-base-100 rounded-xl' href="https://sparkly-praline-c75a2a.netlify.app/">Live Link</a>
                    <a className='border p-2 bg-base-100 rounded-xl'  href="https://github.com/Saifmahin500/Hungry-Ducks">Client  Code</a>
                    <a className='border p-2 bg-base-100 rounded-xl'  href="https://github.com/Saifmahin500/Hungry-Duck-Server-Side"> Server  Code</a>
                </div>

                    <button  className="border p-2 rounded-full " onClick={() => window.my_modal_1.showModal()}><AiOutlineArrowRight className='text-2xl text-white'></AiOutlineArrowRight></button>

                    <dialog id="my_modal_1" className="modal">
                        <form style={{ background: "linear-gradient(90deg, rgb(7, 35, 59) 1.67%, rgb(4, 29, 52) 39.95%, rgb(4, 25, 45) 58.24%, rgb(4, 14, 24) 80.28%, rgb(5, 12, 22) 101.48%)" }} method="dialog" className="modal-box">

                            <button className="btn  btn-circle btn-ghost text-white text-xl absolute right-2 top-2">✕</button>
                            <div className='text-white'>
                                <h3 className="font-bold text-xl">Technologies!</h3>
                                <p className="py-5 mb-6  text-base">React , DaisyUI, React router, Tailwind CSS, MongoDb, Exrpess js, Firebase, verce</p>
                            </div>
                            <div className='text-white'>
                                <h1 className="font-bold text-xl ">Key Features </h1>
                                <p className='space-y-4 py-5  text-base'>
                                    <li>A Buyer: Customer can log in and buy food in HUNGRY Ducks</li>

                                    <li>On this website, there are only 3 routes: Home, All-Menu, Blog.</li>

                                    <li>Instructor Dashboard: Instructors have access to a dedicated dashboard where they can add classes, track class status, and receive valuable feedback from the admin.</li>

                                    <li>There is also a recipe favourite section and chef’s section on 
                                             the home page.</li>
                                        <li>A About section with a download button for PDF files.</li>

                                </p>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Project1;