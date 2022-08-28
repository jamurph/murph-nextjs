
import {useRouter} from 'next/router'
import { motion, AnimatePresence } from 'framer-motion';

export default function Transition({children}){
    //props to letsbuildui.dev for instruction on this animation
    const {asPath} = useRouter();
    
    const variants = {
        inactive: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'   
            }
        },
        out: {
            opacity: 0,
            y: -100,
            transition: {
              duration: 0.5,
              ease: 'easeInOut'
            }
        },
        in: {
            y: 100,
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: 'easeInOut'
            }
        },
    };



    return (
        <div className='overflow-hidden'>
            <AnimatePresence initial={variants.in} exitBeforeEnter>
                <motion.div
                key={asPath}
                variants={variants}
                initial={variants.in}
                animate={variants.inactive}
                exit={variants.out}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
