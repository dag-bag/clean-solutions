import React from "react";
import { quizPage } from ".";
import Image from "next/image";
import Router from "next/router";
import { useRecoilValue } from "recoil";
import Layout from "../../components/quiz-btn-layout";

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
            <div className="flex items-center justify-center h-screen lg:p-20 md:p-20  flex-col-reverse md:flex-row scrollbar-hide border ">
                <div className="flex-1 mt-5">
                    <h1 className=" py-5  md:text-[70px] text-[30px] md:leading-[70px] leading-[50px] font-extrabold text-center text-blue-1">Hey <b className="text-green-1 capi">"{userName.name}" </b> <br /> Welcome to Clean Tech Solutions</h1>
                </div>
                <div className=" flex-1 items-center justify-center hidden md:flex ">
                    <Image width={400} height={400} alt="non" src="/welcome.svg" />
                </div>
                <div className=" flex-1 items-center justify-center flex md:hidden pt-10 ">
                    <Image width={250} height={250} alt="non" src="/welcome.svg" />
                </div>
            </div>
        </Layout>

    );
}

export default WelcomePage;