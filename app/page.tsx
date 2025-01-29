import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Projects from "@/components/main/Project";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
	return (
		<main className="h-full w-full">
			<div className="flex flex-col gap-20">
				<Navbar />
				<Hero />
				<Projects />
				<Skills />
				{/* <Contact /> */}
			</div>
		</main>
	);
}
