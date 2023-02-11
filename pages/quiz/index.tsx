/** @format */

const data = [
    {
        question: "What  Should  I  Call  You?",
        data: "name",
        case: 1,
    },
];


export const quizPage = atom({
    key: 'user-name',
    default: {
        name: ''
    }
})

import Router from "next/router";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useRecoilState, atom } from "recoil";
import { validateString } from "../../types/form";
import Layout from "../../components/quiz-btn-layout";
import Spacing from "../../components/pages/layout/Spacing";

function Quiz() {
    const [state, setState] = useRecoilState(quizPage);
    const [isEnabled, setEnable] = useState(false)

    console.log(state)

    const onSubmit = (values: any,) => {
        setState(values);
        Router.push(`${Router.asPath}/get-email`)

    };

    const { handleChange, handleSubmit, errors, values, } = useFormik({
        onSubmit: onSubmit,
        initialValues: state,
        validationSchema: validateString("name"),
    });

    useEffect(() => {
        if (errors.name || values.name === "") {
            setEnable(true);
        } else {
            setEnable(false);
        }
    }, [errors]);

    function Next() {
        Router.push('/')
    }
    function Prevous() {
        Router.push(`${Router.asPath}/get-email`)
    }

    return (
        <Layout onNext={Next} onPrevious={Prevous} isEnabled={isEnabled} >
            <div style={{ backgroundImage: `url("./page1.png")` }}
                className="hero min-h-screen overflow-hidden bg-center bg-cover">

                <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
                <div className="hero-content text-center text-neutral-content">
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-4xl text-white">

                        <div className=" pt-14 pb-4 my-5 rounded-md px-5">

                            <h1 className="text-5xl text-green-1-tt font-semibold sm:text-5xl sm:leading-none lg:text-5xl xl:text-[3rem] mb-7"> {data[0].question} </h1>

                            <Spacing spacing={2} className="mb-10">

                                <input
                                    type="text"
                                    value={values.name}
                                    name={data[0].data}
                                    placeholder="Your name goes here..."
                                    onChange={(e) => { handleChange(e) }}
                                    className={` ${errors.name
                                        ? "border-red-400 focus:!border-red-400"
                                        : "focus-within:!border-green-1"
                                        } input input-bordered w-full max-w-xl  rounded-full text-center border-2  py-5  md:text-[20px] placeholder:text-gray-300  bg-transparent !bg-white !text-black `}
                                />

                                {
                                    errors.name && <div>
                                        <span > <i className="text-red-500">●</i> {errors.name}</span>
                                    </div>
                                }

                            </Spacing>
                        </div>

                        <p className="mb-5 md:text-xl text-base text-gray-100 " >
                            Clean Solutions is a bio-security company specializing in quickly
                            identifying <b className="text-green-1 font-semibold">economical and eco-friendly solutions</b> to micro-organic challenges. <br />
                            With our focus on <b className="text-green-1 font-semibold">safety and improving health</b> through innovative products and services,
                            our formulas are incredibly versatile and typically <b className="text-green-1 font-semibold">cost less than 80%</b> of what you’re paying now.
                            We reduce our environmental footprint with unique products
                            that <b className="text-green-1 font-semibold">eliminate over 95% </b> of petroleum plastics used in conventional packaging.
                        </p>

                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Quiz;
