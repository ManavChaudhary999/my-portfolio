'use client'

import { motion } from "framer-motion";

export default function MainAnimationWrapper({ className, children } : { className: string, children: React.ReactNode}) {
    return (
        <motion.main
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
        >
            {children}
        </motion.main>
    );
}