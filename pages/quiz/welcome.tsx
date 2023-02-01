
type Props = {};
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion'
import { useRecoilValue } from "recoil";
import Layout from "../../components/quiz-btn-layout";

import { quizPage } from ".";
import Router from "next/router";

function WelcomePage() {
    const userName = useRecoilValue(quizPage)

    function Next() {
        Router.back()
    }
    function Prevous() {
        Router.push(`categories`)
    }
    return (
        <Layout onNext={Next} onPrevious={Prevous}>
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                className="flex items-center justify-center h-screen lg:p-20 md:p-20 p-5 flex-col-reverse md:flex-row scrollbar-hide">
                <div className="flex-1">
                    <h1 className=" py-5 font-heading md:text-[70px] text-[50px] md:leading-[70px] leading-[50px] font-extrabold text-center text-blue-1">Hey <b className="text-green-1 capi">"{userName.name}" </b> <br /> Welcome to Clean Tech Solutions</h1>
                </div>
                <div className=" flex-1 flex items-center justify-center ">
                    <Image width={600} height={600} alt="non" src="/welcome.svg" />
                </div>
            </motion.div>
        </Layout>

    );
}

export default WelcomePage;