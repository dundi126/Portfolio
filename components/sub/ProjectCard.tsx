"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
	src: string;
	title: string;
	description: string;
	tools: string;
}

const ProjectCard = ({ src, title, description, tools }: Props) => {
	return (
		<div className=" flex flex-row w-auto h-auto shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-600 sticky top-[300px]">
			<div className="relative p-4">
				<h1 className="text-2xl font-semibold text-gray-200">{title}</h1>
				<p className="mt-2 text-gray-300">{description}</p>
			</div>
			<Image
				src={src}
				alt={title}
				width={1000}
				height={1000}
				className="w-full object-contain "
			/>
		</div>

		// <motion.div
		// 	whileHover={{ scale: 1.02 }}
		// 	initial={{ opacity: 0, y: 20 }}
		// 	animate={{ opacity: 1, y: 0 }}
		// 	transition={{ duration: 0.5 }}
		// 	className="w-full max-w-4xl flex flex-col md:flex-row bg-[#0F0F0F] border border-gray-700 rounded-2xl overflow-hidden shadow-lg">
		// 	{/* Left Side - Project Info */}
		// 	<div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
		// 		<h2 className="text-2xl font-bold text-white">{title}</h2>
		// 		<p className="text-gray-400 mt-2">{description}</p>
		// 		<div className="mt-4">
		// 			<h3 className="text-sm font-semibold text-gray-300">Tools Used:</h3>
		// 			<p className="text-gray-400">{tools}</p>
		// 		</div>
		// 	</div>

		// 	{/* Right Side - Project Image (Only Half Visible) */}
		// 	<div className="relative w-full md:w-1/2 h-64 overflow-hidden">
		// 		<Image
		// 			src={src}
		// 			alt={title}
		// 			layout="fill"
		// 			objectFit="cover"
		// 			className="absolute right-[-25%] md:right-[-15%] rounded-lg"
		// 		/>
		// 	</div>
		// </motion.div>
	);
};

export default ProjectCard;
