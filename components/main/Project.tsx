import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { project } from "@/contents";

const Projects = () => {
	return (
		<section>
			<div
				className="flex flex-col items-center justify-center py-20 sticky"
				id="projects">
				<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 sticky top-[100px]">
					My Projects
				</h1>
				<div className="h-auto w-[1500px] flex flex-col md:grid-cols-3 gap-10 px-10 sticky ">
					{project.map((data, index) => (
						<ProjectCard
							key={index}
							src={data.src}
							title={data.title}
							description={data.description}
							tools={data.tools}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
