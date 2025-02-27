import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Projects from "@/components/main/Project";
import Skills from "@/components/main/Skills";

export default function Home() {
	return (
		<main className="h-full w-full">
			<div className="flex flex-col gap-20">
				<Navbar />
				<Hero />
				<Skills />
				<Encryption />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
