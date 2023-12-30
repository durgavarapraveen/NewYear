import React, { useEffect, useState } from 'react'
import './NewYear.css'
import { motion, useAnimation } from "framer-motion"
import ballon from '../assests/xxr2_lept_190721-removebg-preview.png'
import Particle from "react-tsparticles";
import { loadFull } from "tsparticles";



function NewYear() {

    const [isVisible, setIsVisible] = useState(false);
    const [BallonVisible, setBallonVisible] = useState(false);
    const controls = useAnimation();
    const BallonControls = useAnimation();

    const stickVariants = {
        initial: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 1.5 } },
        rotated: { scaleX: 0, transition: { duration: 2 } },
    };

    const BallonVariants = {
        initial: { x: 0 },
        visible: { x: -100, transition: { duration: 2 } },
        moveup: { y: -1000, transition: { duration: 5 } }
    }



    useEffect(() => {
        const sequence = async () => {
            await controls.start('visible');
            await controls.start('rotated');
        };

        const BallonSequence = async () => {
            await BallonControls.start('visible');
            await BallonControls.start('moveup')
        }

        setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        setTimeout(() => {
            setBallonVisible(true);
        }, 6500)

        if (BallonVisible) {
            BallonSequence();
        }

        if (isVisible) {
            sequence();
        }


    }, [controls, isVisible, BallonControls, BallonVisible]);


    return (
        <div className='Container'>
            <img src='https://jackrugile.com/lab/fireworks-v2/images/skyline.png' alt='Img' className='bg_image' />
            <img src='https://jackrugile.com/lab/fireworks-v2/images/mountains1.png' alt='Img' className='bg_image1' />
            <img src='https://jackrugile.com/lab/fireworks-v2/images/mountains2.png' alt='Img' className='bg_image2' />
            <motion.div className='main-container'
                initial={{ y: 0, x: 0 }}
                animate={{ y: -80, x: 0 }}
                transition={{ delay: 13.5, duration: 1 }}
            >
                <p className='text'>2</p>
                <p className='text'>0</p>
                <p className='text'>2</p>

                <motion.p
                    className='text'
                    initial={{ x: 0 }}
                    animate={{ y: -1000 }}
                    transition={{ delay: 8.5, duration: 5 }}
                >3</motion.p>

                <motion.p className='stick'
                    variants={stickVariants}
                    initial="initial"
                    animate={controls}
                    style={{
                        transformOrigin: 'left center', // Set transform origin for proper rotation
                    }}
                ></motion.p>

                <motion.div className='relative w-200px'
                    initial={{ x: 500, opacity: 1 }}
                    animate={{ x: 50, opacity: 1 }}
                    transition={{ duration: 5 }}

                >
                    <motion.p initial={{ x: 0 }} animate={{ x: '-200%' }} transition={{ duration: 5, delay: 8.5 }} className='text_4'>4</motion.p>
                    <motion.img src={ballon} alt='ballon' className='Image'
                        variants={BallonVariants}
                        initial="initial"
                        animate={BallonControls}
                    />
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 14.5 }}
                className='newYearText'>
                    <p className='flex justify-center text-center'>Happy New Year</p>
                    <img src='https://c.tenor.com/h_S3tK6B-h4AAAAC/tenor.gif' alt='GIF' className='GIF' />
            </motion.div>

        </div>

    )
}

export default NewYear