import React from "react";
import Image from "next/image";

interface Props {
	src: string;
	title: string;
	description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
	return (
		<div className="w-auto h-auto shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-600">
			<Image
				src={src}
				alt={title}
				width={1000}
				height={1000}
				className="w-full object-contain"
			/>
			<div className="relative p-4">
				<h1 className="text-2xl font-semibold text-gray-200">{title}</h1>
				<p className="mt-2 text-gray-300">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
