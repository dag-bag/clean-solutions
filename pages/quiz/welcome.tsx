import React from "react";
import Layout from "../../components/quiz-btn-layout";
import Router from "next/router";
import { motion } from 'framer-motion'
import AnimationHeading from "../../components/AnimatedHeading";
const WaveAnimation = () => {

    return (
        <motion.div initial={{
            rotate: 10
        }} animate={{
            rotate: 50
        }}
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: .5

            }}
            className="inline-block px-2 md:text-[4rem]">
            👋
        </motion.div>
    )
}

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
        }, 3900)
        return () => {
            clearTimeout(Timeout)
        }
    }, [Router])

    return (
        <Layout onNext={Next} onPrevious={Prevous}>
            <div className="flex items-center justify-center h-full px-10">
                <div>
                    <h1 className="text-center text-[1.5rem] md:text-[3rem] flex items-center justify-center font-medium">Hey!, Deepak  <WaveAnimation /> </h1>
                    <AnimationHeading />
                </div>
            </div>

        </Layout>

    );
}

export default WelcomePage;


