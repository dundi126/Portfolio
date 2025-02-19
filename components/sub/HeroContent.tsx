"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
	const handleClick = () => {
		console.log("handle click");
	};
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
			<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
				<motion.div
					variants={slideInFromLeft(0.5)}
					className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto">
					<span>
						Hi, I&apos;m
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
							{" "}
							Dundi Vignesh!{" "}
						</span>
						<span className="text-xl font-semibold">
							Software Developer | AI Enthusiast
						</span>
					</span>
				</motion.div>

				<motion.p
					variants={slideInFromLeft(0.8)}
					className="text-xl text-gray-400 my-5 max-w-[600px]">
					Currently a student at the University of Michigan, I am deeply
					interested in AI development, web technologies, and software
					engineering. Always eager to learn, experiment, and build impactful
					solutions.
				</motion.p>
				<motion.a
					variants={slideInFromLeft(1)}
					href="https://drive.google.com/file/d/1wFAwXN42hlJQe90jbC_bQm4V3bP3hWCP/view?usp=share_link" // Replace with your actual resume link
					target="_blank"
					rel="noopener noreferrer"
					className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
					Learn More!
				</motion.a>
			</div>

			<motion.div
				variants={slideInFromRight(0.8)}
				className="w-full h-full flex justify-center items-center">
				<Image src="/Frame.svg" alt="work icons" height={650} width={650} />
			</motion.div>
		</motion.div>
	);
};

export default HeroContent;
