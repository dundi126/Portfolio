"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
	src: string;
	title: string;
	description: string;
	tools: string[];
}

const ProjectCard = ({ src, title, description, tools }: Props) => {
	return (
		<div className="flex flex-row w-[1000px] h-[500px] shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-600 sticky top-[190px] p-6">
			{/* Left Content Section */}
			<div className="relative w-[40%] flex flex-col justify-center px-6">
				<h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-500 to-blue-500">
					{title}
				</h1>
				<p className="mt-4 text-gray-300 leading-relaxed">{description}</p>

				{/* Tools Section */}
				<div className="mt-6 flex flex-wrap gap-3">
					{tools.map((tool, index) => (
						<Image
							key={index}
							src={tool}
							width={40}
							height={40}
							alt={`Tool ${index}`}
							className="transition-transform hover:scale-110"
						/>
					))}
				</div>
			</div>

			{/* Right Image Section */}
			<div className="relative w-[60%] flex justify-center items-center">
				<Image
					src={src}
					alt={title}
					width={800}
					height={500}
					className="rounded-lg"
				/>
			</div>
		</div>

		// <div className=" flex flex-row w-[1000px] h-[500px] shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-600 sticky top-[190px]">
		// 	<div className="relative p-4 w-[33%]">
		// 		<h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-cyan-500 to-blue-500">
		// 			{title}
		// 		</h1>
		// 		<p className="mt-2 text-gray-300">{description}</p>
		// 		<div className="mt-3 flex gap-2 text-white text-xl">
		// 			{tools.map((tool, index) => (
		// 				<Image
		// 					key={index}
		// 					src={tool}
		// 					width={50}
		// 					height={50}
		// 					alt={`Tool ${index}`}
		// 				/>
		// 			))}
		// 		</div>
		// 	</div>
		// 	<Image
		// 		src={src}
		// 		alt={title}
		// 		width={1000}
		// 		height={1000}
		// 		className=" rounded-lg absolute -right-1/3"
		// 	/>
		// </div>
	);
};

export default ProjectCard;
