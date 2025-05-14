import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp,FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const ContactUs = () => {
    const formRef = useRef(null);
    const [data, setData] = useState({
        name: "",
        phone: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        gsap.fromTo(".contacts", {
            opacity: 0,
            x: -40
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.3,

            ease: "power4.inOut",
            scrollTrigger: {
                trigger: ".contacts",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });


        gsap.fromTo(formRef.current, {
            opacity: 0,
            x: 40
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: formRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            onComplete: () => {

                const tl = gsap.timeline({ defaults: { opacity: 0, y: 20, duration: 1, ease: "power4.inOut" } });

                tl.fromTo(formRef.current.querySelector("h1"),
                    { opacity: 0, y: -30 },
                    { opacity: 1, y: 0, duration: 1 }
                )
                    .fromTo(formRef.current.querySelectorAll(".form-element"),
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, stagger: 0.3 },
                        "-=0.5"
                    );
            }
        });



    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
console.log("data",data)
            const response = await axios.post("https://wfc-back.onrender.com/api/v1/std/register", data);


            toast.success(response.data.message);
            setData({
                name: "",
                phone: "",
                message: ""
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div id='contact' className="w-full min-h-screen bg-black flex justify-center items-center py-10 px-4">
            <div ref={formRef} className="w-full max-w-5xl bg-[#2c2929] rounded-lg p-6 sm:p-10 flex flex-col md:flex-row gap-10">

                <div className="w-full md:w-1/2 text-white space-y-6">
                    <h1 className='text-[#FF0000] text-3xl sm:text-4xl'>Contact <span className='text-white'>Us</span></h1>

                    <div className="flex items-center gap-4 contacts">
                        <FaPhoneAlt className="text-[#FF0000]" />

                        <a href="tel:+918680902904" className='text-lg '>+91 86809 02904</a>
                    </div>

                    <div className="flex items-center gap-4 contacts">
                        <FaEnvelope className="text-[#FF0000]" />
                        <a href="mailto:lwolverine160@gmail.com" className='text-lg '>lwolverine160@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-4 contacts">
                        <FaWhatsapp className="text-[#FF0000] text-lg" />
                        <a
                            href="https://wa.me/918680902904"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg"
                        >
                            +91 86809 02904
                        </a>
                    </div>


                    <div className="flex items-center gap-4 contacts">
                        <FaInstagram className="text-[#FF0000]" />
                        <a href="https://instagram.com/wfc_gym_tirupur" target="_blank" rel="noopener noreferrer" className='text-lg '>
                            wfc_gym_tirupur
                        </a>
                    </div>
                    <div className="flex items-center gap-4 contacts">
    <FaMapMarkerAlt className="text-green-600" />
    <a href="https://maps.app.goo.gl/gbr85iJvLHmQaahw6?g_st=aw" target="_blank" rel="noopener noreferrer" className='text-lg'>
        Tiruppur, Tamil Nadu 641666
    </a>
</div>
                </div>



                <form
                    onSubmit={handleSubmit}
                    className='w-full md:w-1/2 space-y-5'
                >
                    <div className="form-element">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name='name'
                            onChange={handleChange}
                            className='bg-[gray] px-4 text-white outline-none rounded-lg p-3 w-full placeholder-white'
                        />
                    </div>
                    <div className="form-element">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name='phone'
                            onChange={handleChange}
                            className='bg-[gray] px-4 text-white outline-none rounded-lg p-3 w-full placeholder-white'
                        />
                    </div>
                    <div className="form-element cursor-pointer">
                        <textarea
                            name='message'
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="4"
                            className='p-4 rounded-lg outline-none text-white bg-[gray] w-full resize-none placeholder-white'
                        ></textarea>
                    </div>
                    <div className="form-element">
                        <button
                            disabled={loading}
                            className={`w-full flex justify-center items-center gap-2 cursor-pointer
                ${loading ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#ff0000]'} 
                border border-transparent hover:bg-black hover:scale-105 
                hover:border-[#FF0000] transition duration-300 
                text-white font-semibold text-sm sm:text-lg 
                p-3 px-4 rounded-md shadow-2xl`}
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-red-500 rounded-full animate-spin"></div>
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>

                </form>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>

    );
};
