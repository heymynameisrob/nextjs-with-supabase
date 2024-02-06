"use client";
import { motion } from "framer-motion";
export const MotionDiv = ({ children, ...props }: any) => {
  return <motion.div {...props}>{children}</motion.div>;
};
