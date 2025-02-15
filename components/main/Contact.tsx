"use client";

import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import EarthCanvas from "../canvas/Earth";
import { slideInFromLeft } from "@/utils/motion";

interface FormState {
	name: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [form, setForm] = useState<FormState>({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState<boolean>(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				"your_service_id", // Replace with your actual Service ID
				"your_template_id", // Replace with your actual Template ID
				formRef.current!,
				"your_public_key" // Replace with your actual Public Key
			)
			.then(() => {
				setLoading(false);
				alert("Message sent successfully!");
				setForm({ name: "", email: "", message: "" }); // Reset form
			})
			.catch((error) => {
				setLoading(false);
				console.error("Email sending error:", error);
				alert("Failed to send message. Please try again later.");
			});
	};

	return (
		<div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
			<motion.div
				variants={slideInFromLeft(0.2)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				<p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
					Get in touch
				</p>
				<h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Contact.
				</h3>
				<form>
					<input type="email" name="email" id="email" />
				</form>
			</motion.div>
			<form action="">
				<label className="flex flex-col">
					<span className="text-white font-medium mb-4">Your Name</span>
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="What's your good name?"
						className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
					/>
				</label>
			</form>
			<motion.div
				variants={slideInFromLeft(0.3)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default Contact;
