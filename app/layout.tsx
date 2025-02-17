import type { Metadata } from "next";
import { Content, Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Contact from "@/components/main/Contact";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dundi's Portfolio",
	description: "This is my first portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
				<StarsCanvas />
				{children}
			</body>
		</html>
	);
}
