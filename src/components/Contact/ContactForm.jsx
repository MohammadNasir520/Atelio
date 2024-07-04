import React, { useRef } from 'react';
import Button from '../ui/Button';
import { useForm } from "react-hook-form";

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const form = useRef();
    const onSubmit = (data) => {
        // e.preventDefault()

        emailjs
            .sendForm('service_b5xw8ck', 'template_20422as', form.current, {
                publicKey: 'qdgZbOaFB1pWNVoZd',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success(`${data.name} we have received your Email. check your email inbox`)
                    reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );



        console.log('submit==', data)
    }
    return (
        <div className=''>
            <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className='px-1 lg:w-3/4 mx-auto text-white space-y-8'

                style={
                    {
                        backgroundImage: 'url(/images/dispersionglass.png)',
                        backgroundSize: '440px auto',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        objectFit: "cover",
                    }
                }
            >
                <div className='lg:flex gap-10 space-y-10 lg:space-y-0'>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            required
                            {...register("name")}
                            placeholder=""
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            Your Name
                        </label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            required
                            {...register("companyName")}
                            placeholder=""
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            Brand, Business or Company Name
                        </label>
                    </div>

                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        required
                        {...register("email")}
                        type='email'
                        placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Email
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        required
                        {...register("webOrSocialLink")}
                        placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Website or Social Media Link
                    </label>
                </div>


                <div className='lg:flex gap-10 space-y-6 lg:space-y-0'>



                    <div className="relative h-11 w-full min-w-[200px] text-white">
                        <select
                            {...register("budget")}

                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50 ">
                            <option className='text-black' value="" disabled selected hidden>Select Option</option>
                            <option className='text-black' value="2000">2000</option>
                            <option className='text-black' value="5000">5000</option>
                            <option className='text-black' value="10000">10000</option>
                        </select>
                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            Estimated Budget
                        </label>
                    </div>

                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            required
                            {...register("time")}

                            placeholder=""
                            type='date'
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                            Estimated Time Frame
                        </label>
                    </div>
                </div>

                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        required
                        {...register("interestedService")}
                        placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
                        What service are you interested in?
                    </label>
                </div>

                <div className='flex justify-center my-10'>
                    <Button bgColor={"bg-green-600"} type="submit">Send Query</Button>
                </div>
            </form >
        </div>
    );
};

export default ContactForm;