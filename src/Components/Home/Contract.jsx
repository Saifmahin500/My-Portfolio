import { Form } from "react-router-dom";


const Contract = () => {
    return (
        <div id="contact" className="my-10">
        <h1 className="text-3xl text-center py-10 text-white font-semibold">Contact With Me</h1>
        <div className="max-w-screen-lg mx-auto ">
            <div className="flex flex-col-reverse lg:flex-row items-center space-y-5 lg:space-y-0   lg:space-x-10 p-10 bg-blue-950 rounded-3xl shadow  ">

                <div className="space-y-4">
                    <img src="https://i.ibb.co/SwM0XQq/IMG-6418.jpg" className=" mt-10 lg:h-96  object-contain shadow-2xl rounded-xl" />
                    <div className="text-white w-full">
                        <h2 className="font-bold text-lg  text-gray-300">Find Me on Phone/Whatsapp:</h2>
                        <p className="text-xl">+8801856590532</p>
                    </div>
                    <div className="text-white">
                        <h2 className="font-bold text-lg text-gray-300">Find Me on E-mail:</h2>
                        <p className="text-xl">saifmahin500@gmail.com</p>
                    </div>
                </div>


                <div>
                    <Form className="w-full lg:space-y-5">
                        <h1 className="text-xl font-semibold text-white ">Let's work together to build outstanding web experiences!</h1>
                        <div className="text-white space-y-3">
                            <div className=" lg:flex lg:space-x-4">
                                <div className=" w-full">

                                    <label className="label">
                                        <span className="label-text text-md text-white">Your Name </span>
                                    </label>
                                    <input type="text" placeholder="Name*" name="user_name" className="input  text-white bg-transparent  w-full  border-gray-500   " />
                                </div>
                                <div className=" w-full">
                                    <label className="label">
                                        <span className="label-text text-md text-white">Your Email</span>
                                    </label>
                                    <input type="text" placeholder="Email*" name="user_email" className="input  text-white bg-transparent border-gray-500 w-full   " />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-md text-white">Subject</span>
                                </label>
                                <input type="text " placeholder="Subject*" name="subject" className="input text-white bg-transparent border-gray-500 w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-md text-white">Massge</span>
                                </label>
                                <textarea className="textarea input text-white bg-transparent border-gray-500  w-full h-32" name="massge" placeholder="Massge*" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info text-lg font-semibold ">Send Massge</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contract;