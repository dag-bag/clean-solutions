import React from "react";
import Image from "next/image";
import Router from "next/router";
import Layout from "../../components/quiz-btn-layout";
import AnimatedCharacters from "../../components/AnimatedHeading";

function WelcomePage() {
    function Next() {
        Router.push('get-email')
    }
    function Prevous() {
        Router.push('categories')
    }

    React.useEffect(() => {
        const Timeout = setTimeout(() => {
            Router.push('categories')
        }, 4000)
        return () => {
            clearTimeout(Timeout)
        }
    }, [Router])

    return (
        <Layout onNext={Next} onPrevious={Prevous}>
            <div className="flex items-center justify-center h-screen lg:p-20 md:p-20  flex-col-reverse md:flex-row scrollbar-hide border ">
                <div className="flex-1 mt-5">
                    <AnimatedCharacters />
                </div>
                <div className=" flex-1 items-center justify-center hidden md:flex ">
                    <Image width={400} height={400} alt="non" src="/welcome.svg" />
                </div>
                <div className=" flex-1 items-center justify-center flex md:hidden pt-10 ">
                    <Image width={200} height={200} alt="non" src="/welcome.svg" />
                </div>
            </div>
        </Layout>

    );
}

export default WelcomePage;