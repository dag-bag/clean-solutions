import Router from "next/router";
import { useFormik, } from "formik";
import { useState, useEffect } from "react";
import { useRecoilState, atom } from "recoil";
import Layout from "../../components/quiz-btn-layout";
import { motion, AnimatePresence } from "framer-motion";
import Spacing from "../../components/pages/layout/Spacing";
import { dropUpVariants, childVariants } from "../../animation/anime";
import * as yup from 'yup';

type emailAtomType = string | undefined
const emailAtom = atom<emailAtomType>({
    key: 'user-email',
    default: undefined
})

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
});

const GetEmailPage = () => {
    const [state, setState] = useRecoilState(emailAtom)
    const [isEnabled, setEnable] = useState(false)

    function Next() {
        Router.back()
    }
    function Prevous() {
        Router.push(`welcome`)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        },
    });

    return (
        <Layout onNext={Next} onPrevious={Prevous} isEnabled={isEnabled} >
            <motion.div
                animate="animate"
                initial="initial"
                exit={{ opacity: 0 }}
                style={{ backgroundImage: `url("./page1.png")` }}
                className="hero min-h-screen overflow-hidden bg-center bg-cover"
            >

                <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
                <div className="hero-content text-center text-neutral-content">
                    <motion.form
                        variants={childVariants(0.4)}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl text-white">

                        <div className=" pt-14 pb-4 my-5 rounded-md px-5">

                            <h1 className="text-5xl text-green-1-tt font-semibold sm:text-5xl sm:leading-none lg:text-5xl xl:text-[3rem] mb-7">Your Email Address</h1>
                            <Spacing spacing={2} className="mb-10">

                                <input
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="email goes here"
                                    className={` ${formik.errors.email
                                        ? "border-red-400 focus:!border-red-400"
                                        : "focus-within:!border-green-1"
                                        } input input-bordered w-full max-w-xl  rounded-full text-center border-2  py-5  md:text-[20px] placeholder:text-gray-300  bg-transparent !bg-white !text-black `}
                                />

                                <AnimatePresence>
                                    {
                                        formik.errors && <motion.div
                                            transition={{ duration: .2 }}
                                            exit={{ opacity: 0, height: 0 }}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 24 }}>
                                            <span > <i className="text-red-500">●</i> {formik.errors.email}</span>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </Spacing>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </Layout>
    )
}

export default GetEmailPage